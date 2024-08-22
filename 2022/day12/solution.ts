import fs from 'fs';
import { findE, move } from './utils';

const data = fs.readFileSync('data.txt', 'utf8');
const split = data.split(/\n/);

let position = [0, 0];
let previousPosition = [0, 0];

export type potentialMove = {
  position: number[];
  magnitude: number;
  char: number;
};

const e = findE(split);
let count = 0;

while (!(position[0] === e[0] && position[1] === e[1])) {
  [position, previousPosition] = move(split, position, previousPosition, e);
  count++;
  // console.log(count);
  console.log(position);
}
console.log(count);

// [ 1, 2 ] [ 2, 5 ] = [1, 3]
// [ 2, 2 ] [ 2, 5 ] = [0, 3]
// [ 2, 1 ] [ 2, 5 ] = [0, 4]

// [ 1, 2 ] [ 2, 5 ] = [-1, -3]
// [ 2, 2 ] [ 2, 5 ] = [0, -3]
// [ 2, 1 ] [ 2, 5 ] = [0, -4]
