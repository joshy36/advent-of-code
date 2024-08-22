import fs from 'fs';
import Storage from './storage';

const data = fs.readFileSync('data.txt', 'utf8');

// Part 1
let [c, i] = data.split('\n\n');
let crates = c.split('\n');

const s = new Storage(crates);

let instructions = i.split('\n');
for (const i of instructions) {
  let split = i.split(' ').map(Number);
  s.moveCrate(split[1], split[3], split[5]);
}

let answer = '';
for (const i of s.storage) {
  answer += i[i.length - 1];
}

console.log(answer);

// Part 2
const s2 = new Storage(crates);

for (const i of instructions) {
  let split = i.split(' ').map(Number);
  s2.newMoveCrate(split[1], split[3], split[5]);
}

let answer2 = '';
for (const i of s2.storage) {
  answer2 += i[i.length - 1];
}

console.log(answer2);
