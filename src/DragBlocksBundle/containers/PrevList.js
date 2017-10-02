import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrevBlock from '../components/PrevBlock';
import Logo from '../components/Logo';
import dispatchProps from '../actions';

class PrevList extends Component {
  render() {
    const { 
      blocks, 
      onDragStart, 
      onDrag,
      onDragEnd } = this.props;
      console.log(this.props);
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

