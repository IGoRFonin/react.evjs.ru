import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailBlock from '../components/DetailBlock';
import { blocksSelector } from '../selectors';

class DetailList extends Component {
  render() {
    const { blocks } = this.props;
    // console.log('--- render DETAIL');
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