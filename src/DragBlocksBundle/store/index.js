import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducer'

const enhancer = applyMiddleware(thunk,/*logger*/);

const store = createStore(reducer, {}, composeWithDevTools(enhancer));

export default store;