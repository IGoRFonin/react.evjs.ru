import { createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import api from '../middlewares/api'

const enhancer = applyMiddleware(thunk, api, /*logger*/);

const store = createStore(reducer, {}, composeWithDevTools(enhancer));

export default store;