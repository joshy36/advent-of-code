import fs from 'fs';

const data = fs.readFileSync('data.txt', 'utf8');
const split = data.split('\n');

type timeStep = {
  cycle: number;
  x: number;
};

let storage: timeStep[] = new Array();
let c = 0;
let sum = 1;
storage.push({ cycle: c, x: sum });

for (let i = 0; i < split.length; i++) {
  if (split[i] === 'noop') storage.push({ cycle: (c += 1), x: sum });
  else {
    storage.push({ cycle: (c += 1), x: sum });
    storage.push({
      cycle: (c += 1),
      x: (sum += Number(split[i].substring(5, split[i].length))),
    });
  }
}

let p1 =
  storage[19].x * 20 +
  storage[59].x * 60 +
  storage[99].x * 100 +
  storage[139].x * 140 +
  storage[179].x * 180 +
  storage[219].x * 220;

console.log(p1);
