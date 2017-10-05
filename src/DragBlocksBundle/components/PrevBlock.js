import React from 'react';
import { Motion, spring } from 'react-motion';

const PrevBlock = ({
  block,
  onDragStart,
  onDrag,
  onDragEnd
}) => {
  const isDrag = block.get('isDrag');
  const classes = isDrag ? ' hidden-opacity':'';
  const top = block.get('top');

  if( top !== 0 ) {
    return (
      <Motion style={{top: spring(top)}}>
        { style => <li data-id={block.get('id')} 
                    className={`blocks-nav__item absolute ${classes}`}
                    onDragStart={onDragStart}
                    onDrag={onDrag} 
                    onDragEnd={onDragEnd} 
                    draggable="true"
                    style={style} 
                    >
                      <div className="block-line">
                        <span className="block-line-id">{block.get('id')}</span>
                      </div>
                  </li>
        }
      </Motion>
    )
  }
  return(
  <li data-id={block.get('id')} 
    className={`blocks-nav__item ${classes}`}
    onDragStart={onDragStart}
    onDrag={onDrag} 
    onDragEnd={onDragEnd} 
    draggable="true" 
    >
      <div className="block-line">
        <span className="block-line-id">{block.get('id')}</span>
      </div>
  </li>
  )
}

export default PrevBlock;