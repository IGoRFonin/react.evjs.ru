import { 
    BLOCK_DRAG,
    START,
    END,
    ERROR,
    CHANGE_TOP
} from '../constants';

const dispatchProps = (dispatch) => {
  return {
        onDragStart: (id) => {
            
            dispatch({
                type: BLOCK_DRAG + START,
                payload: { id }
            })
        },
        onDrag: ({id, clientY, width}) => {
            
            dispatch({
                type: BLOCK_DRAG,
                payload: {
                            id,
                            clientY,
                            width
                         }
            })
        },
        onDragEnd: (id) => {
            dispatch({
                type: BLOCK_DRAG + END,
                payload: { id }
            })
        },
        appLoaded: (blocks) => {
            dispatch({
                type: CHANGE_TOP,
                payload: { blocks }
            })           
        }

    }
}

export default dispatchProps;