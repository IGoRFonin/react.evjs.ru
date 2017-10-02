import { combineReducers } from 'redux';
import blocks from './blocks';
import dragElement from './dragElement';

const rootReducer = combineReducers({
  blocks,
  dragElement
});

export default rootReducer;
