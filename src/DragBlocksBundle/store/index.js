import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducer'
import initialState from './initialState';

const enhancer = applyMiddleware(thunk,/*logger*/);

const store = createStore(reducer, initialState, composeWithDevTools(enhancer));

export default store;