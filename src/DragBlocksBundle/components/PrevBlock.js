import React from 'react';

const PrevBlock = ({
  block,
  onDragStart,
  onDrag,
  onDragEnd
}) => {
  const { isDrag } = block;
  const classes = isDrag ? ' hidden-opacity':'';
  return(
  <li data-id={block.get('id')} 
    className={`blocks-nav__item ${classes}`}
    onDragStart={onDragStart}
    onDrag={onDrag} 
    onDragEnd={onDragEnd} 
    draggable="true" 
    >
      <div className="block-line"></div>
  </li>
  )
}

export default PrevBlock;