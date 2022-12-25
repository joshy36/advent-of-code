import fs from 'fs';
import { checkAbove, checkBottom, checkLeft, checkRight } from './utils';

const data = fs.readFileSync('data.txt', 'utf8');
const split = data.split('\n');

let count = 0;

for (let row = 0; row < split[0].length; row++) {
  for (let col = 0; col < split.length; col++) {
    if (
      row === 0 ||
      row === split[0].length - 1 ||
      col === 0 ||
      col === split.length - 1
    ) {
      count++;
    } else {
      let [isLeftVis, isAboveVis, isRightVis, isBottomVis] = [
        false,
        false,
        false,
        false,
      ];
      isLeftVis = checkLeft(split, row, col);

      if (!isLeftVis) {
        isAboveVis = checkAbove(split, row, col);
      }

      if (!isLeftVis || !isAboveVis) {
        isRightVis = checkRight(split, row, col);
      }

      if (!isLeftVis || !isAboveVis || !isRightVis) {
        isBottomVis = checkBottom(split, row, col);
      }

      if (isLeftVis || isAboveVis || isRightVis || isBottomVis) {
        count++;
      }
    }
  }
}

// Part 1
console.log(count);
