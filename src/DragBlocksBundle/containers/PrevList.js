import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrevBlock from '../components/PrevBlock';
import Logo from '../components/Logo';
import dispatchProps from '../actions';
import { blocksSelector } from '../selectors';

class PrevList extends Component {
  componentDidMount() {
    let elements = document.querySelectorAll('.blocks-nav__item');
    let blocks = [].slice.call(elements).map(item => {
        return {
          id: item.dataset.id,
          top: item.offsetTop,
          topD: document.querySelector('.blocks-content__item[data-id="'+item.dataset.id+'"]').offsetTop
        };
      });
    this.props.appLoaded(blocks);
  }
  componentWillReceiveProps(nextProps) {
    // console.log(this.props, nextProps);
  }
  render() {
    const { 
      blocks, 
      onDragStart, 
      onDrag,
      onDragEnd } = this.props;
      // console.log('--- render PREV');
    return(
        <div className="left">
            <Logo />
            <ul className="blocks-nav">
                {blocks.map(block => (
                <PrevBlock 
                    key={block.get('id')} 
                    block={block} 
                    onDragStart={() => onDragStart(block.get('id'))}
                    onDrag={(e) => {

                      onDrag({
                        id:block.get('id'),
                        clientY:e.clientY,
                        width: e.target.offsetWidth
                      })
                    }}
                    onDragEnd={() => onDragEnd(block.get('id'))}
                    />
                ) )}
            </ul>
        </div>
      );
  }
};

const mapStateToProps = (state) => {
  return {
    blocks: blocksSelector(state),
  }
}

export default connect(mapStateToProps, dispatchProps)(PrevList);

