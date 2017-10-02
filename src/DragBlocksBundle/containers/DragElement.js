import React, { Component } from 'react';
import { connect } from 'react-redux';

class DragElement extends Component {
  render() {
    const { dragElement } = this.props;

    if( dragElement.id !== undefined && dragElement.top != 0) {
      return (
      <li
        style={{
          width: dragElement.width + 'px',
          top: dragElement.top - 18 + 'px'
        }}
        className={`blocks-nav__item drag_element`}
        >
          <div className="block-line"></div>
      </li>);
    } else {
      return null;
    }
  
  }
} 

const mapStateToProps = (state) => {
  const { dragElement } = state;
  return {
    dragElement 
  }
}

export default connect(mapStateToProps)(DragElement);