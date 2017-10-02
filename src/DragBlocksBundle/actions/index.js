import { 
    BLOCK_DRAG,
    START,
    END,
    ERROR,
    APP_LOADED
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
        },
        appLoaded: (blocks) => {
            dispatch({
                type: APP_LOADED,
                payload: {blocks}
            })           
        }

    }
}

export default dispatchProps;