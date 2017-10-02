import { 
    START,
    END,
    BLOCK_DRAG,
    APP_LOADED
} from '../constants';

const blocks = (state = [], action) => {
  const newBlocks = [];
  switch(action.type) {
    case APP_LOADED:
      state.forEach((block, i) => {
        newBlocks[i] = {
          ...block,
          top: action.blocks.filter(b => b.id == block.id ? b.top : false)[0].top
        };
      });

      return newBlocks;
    case BLOCK_DRAG + START:
      state.forEach((block, i) => {
        newBlocks[i] = {
          ...block,
          isDrag:block.id === action.id ? true : false};
      });
      return newBlocks;
    case BLOCK_DRAG:
      if(action.clientY === 0) return state;
      state.forEach((block, i) => {
        
        newBlocks[i] = block;
        if(action.clientY > block.top && action.id != block.id) {
          var elem = newBlocks.splice(action.id, 1);
        }
      });

      return state;
    case BLOCK_DRAG + END: 
      state.forEach((block, i) => {
        newBlocks[i] = {
          ...block,
          isDrag:block.id === action.id ? false : false};
      });

      return newBlocks;
    default:
      return state;
  }
}

export default blocks;