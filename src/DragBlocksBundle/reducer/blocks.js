import { 
    START,
    END,
    BLOCK_DRAG,
    CHANGE_TOP
} from '../constants';
import { OrderedMap, Record, List, Map } from 'immutable';
import InitialState from '../store/InitialState'

// const ReducerState = Record();

const defaultState = List(InitialState.blocks);
window.blocks = defaultState;
const blocks = (state = defaultState, action) => {
  let newBlocks = [];
  const { type, payload } = action;

  switch(type) {

    // add top(clientY) prevblocks
    case CHANGE_TOP:
      const { blocks } = action.payload;

      return state.update((mapObj, i) => mapObj.map((val) => 
        val.set('top', blocks.find(b => b.id === val.get('id').toString()).top)
        .set('topD', blocks.find(b => b.id === val.get('id').toString()).topD)
        ));
      
    
    // start draging block
    case BLOCK_DRAG + START:
      return state.setIn([
        state.findKey(block => payload.id.toString() === block.get('id').toString()),
         'isDrag'], true);

    // proccesing draging block
    case BLOCK_DRAG:
      const { clientY, id } = action.payload;
      const dragableBlock = state.find(block => id.toString() === block.get('id').toString());
    
      if(clientY === 0 || dragableBlock.get('top').toString() === clientY.toString()) return state;
      
      const dragKey = state.findKey(block => id.toString() === block.get('id').toString());
      
      if(dragKey === 0 && +state.get(dragKey + 1).get('top') > clientY || 
        dragKey + 1 === state.size && +state.get(dragKey - 1).get('top') < clientY ||
        +state.get(dragKey - 1).get('top') < clientY && +state.get(dragKey + 1).get('top') > clientY) {
        return state;
      }
      
      const nextEntity = state.find(block => dragableBlock.get('top') < block.get('top') && id != block.get('id'));
      const prevEntity = state.findLast(block => dragableBlock.get('top') > block.get('top') && id != block.get('id'));

      if(nextEntity == undefined && prevEntity == undefined) {
        return state;
      }
      
      // console.log('nextEntity' , nextEntity.get('top'));
      // console.log('drag' , dragableBlock.get('top'));
      // console.log('clientY' , clientY);

      // debugger
      if(nextEntity !== undefined && clientY > nextEntity.get('top')) { 
         const nextID = nextEntity.get('id');
         let newState = state.delete(dragKey);
        
         if(!(newState.findKey(block => block.get('id').toString() === id.toString()))) {
          return newState.setIn([newState.findKey(b => b.get('id') === nextID), 'top'], dragableBlock.get('top'))
                          .setIn([newState.findKey(b => b.get('id') === nextID), 'topD'], dragableBlock.get('topD'))
                          .insert(state.findKey(b => b.get('id') === nextID), dragableBlock)
                          .setIn([state.findKey(b => b.get('id') === nextID), 'top'], state.getIn([state.findKey(b => b.get('id') === nextID), 'top']))
                          .setIn([state.findKey(b => b.get('id') === nextID), 'topD'], state.getIn([state.findKey(b => b.get('id') === nextID), 'topD']));
         }

      } else if(prevEntity !== undefined && clientY < prevEntity.get('top')) {
        const prevID = prevEntity.get('id');
        let newState = state.delete(dragKey);

        if(!(newState.findKey(block => block.get('id').toString() === id.toString()))) {
          return newState.setIn([newState.findKey(b => b.get('id') === prevID), 'top'], dragableBlock.get('top'))
                          .setIn([newState.findKey(b => b.get('id') === prevID), 'topD'], dragableBlock.get('topD'))
                          .insert(newState.findKey(b => b.get('id') === prevID), dragableBlock)
                          .setIn([newState.findKey(b => b.get('id') === prevID), 'top'], state.getIn([state.findKey(b => b.get('id') === prevID), 'top']))
                          .setIn([newState.findKey(b => b.get('id') === prevID), 'topD'], state.getIn([state.findKey(b => b.get('id') === prevID), 'topD']));
         }
      }

      /*
        1. Достать элемент в на место которого будут ставить
        2. При обновлении этому элементу ставить top передвигаемого.
        3. Обновить у передвигаемоего top
       */

      // newBlocks = state.filter(block => {
      //   return id !== block.id
      // });

      // const finalBlocks = newBlocks.reduce((acc, block) => {
      //   acc.push(block);
      //   if(clientY > block.top && acc.find(block => dragableBlock.id === block.id) === undefined) {
      //     acc.push(dragableBlock);
      //   }
      //   return acc;
      // }, []);

      return state;

    // finish draging block
    case BLOCK_DRAG + END: 
      return state.setIn([
        state.findKey(block => payload.id.toString() === block.get('id').toString()),
         'isDrag'], false);
  }


  return state;
}

export default blocks;