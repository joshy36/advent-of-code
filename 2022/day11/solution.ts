import fs from 'fs';
import Monkey from './Monkey';

const data = fs.readFileSync('data.txt', 'utf8');
const split = data.split(/\n\n/);

let monkeys: Monkey[] = [];

// Create array of monkeys
for (const i of split) {
  monkeys.push(new Monkey(i.split(/\n/)));
}

for (let i = 0; i < 20; i++) {
  for (let j = 0; j < monkeys.length; j++) {
    monkeys[j].inspect(monkeys);
  }
}

let inspections: number[] = [];
for (const i of monkeys) {
  inspections.push(i.inspections);
}

inspections
  .sort(function (a, b) {
    return a - b;
  })
  .reverse();

// Part 1
console.log(inspections[0] * inspections[1]);
