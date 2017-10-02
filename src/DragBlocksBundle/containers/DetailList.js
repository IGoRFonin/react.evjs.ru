import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailBlock from '../components/DetailBlock';

class DetailList extends Component {
  render() {
    const { blocks } = this.props;
    return(
      <div className="right">
        <div className="blocks-content">
          { blocks.map(block => (
          <DetailBlock 
            block={block} 
            key={block.id} />
          ) )}
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { blocks } = state;
  return {
    blocks
  }
}

export default connect(mapStateToProps)(DetailList);