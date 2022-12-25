import { Tree } from './types';

// Part 1
export const checkLeft = (split: string[], row: number, col: number): Tree => {
  let tree = { isVisible: false, view: 0 };
  for (let i = 1; i <= col; i++) {
    tree.view++;
    if (Number(split[row][col]) <= Number(split[row][col - i])) {
      return tree;
    }
  }
  tree.isVisible = true;
  return tree;
};

export const checkAbove = (split: string[], row: number, col: number): Tree => {
  let tree = { isVisible: false, view: 0 };
  for (let i = 1; i <= row; i++) {
    tree.view++;
    if (Number(split[row][col]) <= Number(split[row - i][col])) {
      return tree;
    }
  }
  tree.isVisible = true;
  return tree;
};

export const checkRight = (split: string[], row: number, col: number): Tree => {
  let tree = { isVisible: false, view: 0 };
  for (let i = col + 1; i < split[0].length; i++) {
    tree.view++;
    if (Number(split[row][col]) <= Number(split[row][i])) {
      return tree;
    }
  }
  tree.isVisible = true;
  return tree;
};

export const checkBottom = (
  split: string[],
  row: number,
  col: number
): Tree => {
  let tree = { isVisible: false, view: 0 };
  for (let i = row + 1; i < split.length; i++) {
    tree.view++;
    if (Number(split[row][col]) <= Number(split[i][col])) {
      return tree;
    }
  }
  tree.isVisible = true;
  return tree;
};
