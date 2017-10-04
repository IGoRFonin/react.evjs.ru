import React from 'react';
import { Motion, spring } from 'react-motion';

const DetailBlock = ({
  block
}) => {
  const topD = block.get('topD');
  if(topD !== 0) {
    return (
    <Motion style={{top: spring(topD, {stiffness: 90, damping: 40})}}>
      { styles => <div className="blocks-content__item absolute" style={styles} data-id={block.get('id')}>{block.get('id')}</div>}
    </Motion>
    );
  }
  return (<div className="blocks-content__item" data-id={block.get('id')}>{block.get('id')}</div>);
}

export default DetailBlock;