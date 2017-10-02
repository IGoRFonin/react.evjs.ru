import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrevBlock from '../components/PrevBlock';
import Logo from '../components/Logo';
import dispatchProps from '../actions';
import { APP_LOADED } from '../constants';

class PrevList extends Component {
  componentDidMount() {
    let elements = document.querySelectorAll('.blocks-nav__item');
    let blocks = [].slice.call(elements).map(item => {
        return {
          id: item.dataset.id,
          top: item.offsetTop
        };
      });
    this.props.appLoaded(blocks);
  }
  render() {
    const { 
      blocks, 
      onDragStart, 
      onDrag,
      onDragEnd } = this.props;
    return(
        <div className="left">
            <Logo />
            <ul className="blocks-nav">
                {blocks.map(block => (
                <PrevBlock 
                    key={block.id} 
                    block={block} 
                    onDragStart={() => onDragStart(block.id)}
                    onDrag={(e) => {
                      onDrag({
                        id:block.id,
                        clientY:e.clientY,
                        width: e.target.offsetWidth
                      })
                    }}
                    onDragEnd={() => onDragEnd(block.id)}
                    />
                ) )}
            </ul>
        </div>
      );
  }
};

const mapStateToProps = (state) => {
  return {
    blocks: state.blocks,
  }
}

export default connect(mapStateToProps, dispatchProps)(PrevList);

