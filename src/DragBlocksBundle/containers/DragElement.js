import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dragSelector } from '../selectors';

class DragElement extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.dragElement.top === nextProps.dragElement.top) {
      return false;
    }

    return true;
  }
  render() {
    const { dragElement } = this.props;
    if(!(dragElement.id !== undefined && dragElement.top != 0)) return null;
    console.log('render');
    return (
      <li
        style={{
          width: dragElement.width + 'px',
          top: dragElement.top - 18 + 'px'
        }}
        className={`blocks-nav__item drag_element`}
        >
          <div className="block-line"></div>
      </li>
      );
  
  }
} 

const mapStateToProps = (state) => {
  return {
    dragElement: dragSelector(state)
  }
}

export default connect(mapStateToProps)(DragElement);