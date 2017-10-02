import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from './store'
import PrevList from './containers/PrevList'
import DetailList from './containers/DetailList';
import DragElement from './containers/DragElement';
import './DragBloksApp.scss';

class DragBlocksApp extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="drag_blocks clearfix">
          <PrevList />
          <DetailList />
          <DragElement />
        </div>
      </Provider>
    )
  }
}

export default DragBlocksApp;