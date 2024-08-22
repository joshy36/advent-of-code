import fs from 'fs';
import { checkAbove, checkBottom, checkLeft, checkRight } from './utils';

const data = fs.readFileSync('data.txt', 'utf8');
const split = data.split('\n');

let count = 0;
let scenicScore = 0;

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
      let left = checkLeft(split, row, col);
      let up = checkAbove(split, row, col);
      let right = checkRight(split, row, col);
      let down = checkBottom(split, row, col);

      if (left.isVisible || up.isVisible || right.isVisible || down.isVisible) {
        count++;
      }

      let temp = left.view * up.view * right.view * down.view;

      if (temp > scenicScore) scenicScore = temp;
    }
  }
}

// Part 1
console.log(count);

// Part 2
console.log(scenicScore);
