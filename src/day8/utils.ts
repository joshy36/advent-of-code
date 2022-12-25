// Part 1
export const checkLeft = (
  split: string[],
  row: number,
  col: number
): boolean => {
  for (let i = 1; i <= col; i++) {
    if (Number(split[row][col]) <= Number(split[row][col - i])) {
      return false;
    }
  }
  return true;
};

export const checkAbove = (
  split: string[],
  row: number,
  col: number
): boolean => {
  for (let i = 1; i <= row; i++) {
    if (Number(split[row][col]) <= Number(split[row - i][col])) {
      return false;
    }
  }
  return true;
};

export const checkRight = (
  split: string[],
  row: number,
  col: number
): boolean => {
  for (let i = split[0].length - 1; i > col; i--) {
    if (Number(split[row][col]) <= Number(split[row][i])) {
      return false;
    }
  }
  return true;
};

export const checkBottom = (
  split: string[],
  row: number,
  col: number
): boolean => {
  for (let i = split.length - 1; i > row; i--) {
    if (Number(split[row][col]) <= Number(split[i][col])) {
      return false;
    }
  }
  return true;
};
