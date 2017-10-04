import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailBlock from '../components/DetailBlock';
import { blocksSelector } from '../selectors';

class DetailList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { block } = this.props;
    if(nextProps.blocks.findKey(block => block.get('isDrag') === true) !== undefined){
      return false;
    }

    return true;
  }
  render() {
    const { blocks } = this.props;
    return(
      <div className="right">
        <div className="blocks-content">
          { blocks.map(block => (
          <DetailBlock 
            block={block} 
            key={block.get('id')} />
          ) )}
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    blocks:blocksSelector(state)
  }
}

export default connect(mapStateToProps)(DetailList);