import React from 'react';

const DetailBlock = ({
  block
}) => (
  <div className="blocks-content__item" data-id={block.get('id')}>{block.get('id')}</div>
)

export default DetailBlock;