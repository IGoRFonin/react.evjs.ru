import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducer'
import initialState from './initialState';

const enhancer = applyMiddleware(thunk,/*logger*/);

const store = createStore(reducer, initialState, composeWithDevTools(enhancer));

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => {
      const nextRootReducer = require('../reducer/index');
      store.replaceReducer(nextRootReducer);
    });
  }

export default store;