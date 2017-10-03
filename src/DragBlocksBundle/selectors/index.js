import { createSelector } from 'reselect';
import { arrToMap } from '../helper'
const blocksGetter = state => state.blocks;
const dragGetter = state => state.dragElement;

export const blocksSelector = createSelector(blocksGetter, (blocks) => {
  return blocks;
});

export const dragSelector = createSelector(dragGetter, (drag) => {
  return drag;
});