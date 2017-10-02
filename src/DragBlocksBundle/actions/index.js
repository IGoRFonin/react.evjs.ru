import { 
    BLOCK_DRAG,
    START,
    END,
    ERROR
} from '../constants';

const dispatchProps = (dispatch) => {
  return {
        onDragStart: (id) => {
            
            dispatch({
                type: BLOCK_DRAG + START,
                id
            })
        },
        onDrag: ({id, clientY, width}) => {
            
            dispatch({
                type: BLOCK_DRAG,
                id,
                clientY,
                width
            })
        },
        onDragEnd: (id) => {
            dispatch({
                type: BLOCK_DRAG + END,
                id
            })
        }
    }
}

export default dispatchProps;
