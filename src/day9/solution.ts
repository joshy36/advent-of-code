import fs from 'fs';
import Rope from './Rope';

const data = fs.readFileSync('data.txt', 'utf8');
const split = data.split('\n');

let rope = new Rope();

for (let i = 0; i < split.length; i++) {
  rope.moveHead(split[i]);
  rope.moveTail(split[i]);
}

console.log(rope.map);
console.log(rope.mapTail);
console.log(rope.getSum());

// .HHHH.
// .HHHHH
// HHHHHH
// ....H.
// HHHHH.

// ..##..
// ...##.
// .####.
// ....#.
// s###..
