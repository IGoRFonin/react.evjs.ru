import { 
    BLOCK_DRAG,
    END
} from '../constants';

const dragElement = (state = {}, action) => {
  switch(action.type) {
    case BLOCK_DRAG:
    const { id, clientY, width } = action.payload;
      return {
        id,
        top:clientY,
        width
      };
    case BLOCK_DRAG + END:
      return {};
    default:
      return state;
  }
}

export default dragElement;