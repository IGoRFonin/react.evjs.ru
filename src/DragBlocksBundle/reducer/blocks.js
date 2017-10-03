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
        val.set('top', blocks.find(b => b.id === val.get('id').toString()).top)));
      
    
    // start draging block
    case BLOCK_DRAG + START:
      return state.setIn([
        state.findKey(block => payload.id.toString() === block.get('id').toString()),
         'isDrag'], true);

    // proccesing draging block
    case BLOCK_DRAG:
      const { clientY, id } = action.payload;
      const dragableBlock = state.find(block => id === block.id);
      if(clientY === 0 && dragableBlock.top === clientY) return state;
      
      const dragKey = state.findKey(block => id === block.id);
      if(dragKey === 0 && state.get(dragKey + 1).top > clientY || 
        dragKey + 1 === state.size && state.get(dragKey - 1).top < clientY ||
        state.get(dragKey - 1).top < clientY && state.get(dragKey + 1).top > clientY) {
        return state;
      }


      newBlocks = state.filter(block => {
        return id !== block.id
      });

      const finalBlocks = newBlocks.reduce((acc, block) => {
        acc.push(block);
        if(clientY > block.top && acc.find(block => dragableBlock.id === block.id) === undefined) {
          acc.push(dragableBlock);
        }
        return acc;
      }, []);

      return finalBlocks;

    // finish draging block
    case BLOCK_DRAG + END: 
      return state.setIn([
        state.findKey(block => payload.id.toString() === block.get('id').toString()),
         'isDrag'], false);
  }


  return state;
}

export default blocks;