import fs from 'fs';

const data = fs.readFileSync('data.txt', 'utf8');
const split = data.split('\n');

type timeStep = {
  cycle: number;
  x: number;
};

// Part 1
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

let p1 = 0;
for (let i = 20; i <= 220; i += 40) {
  p1 += storage[i - 1].x * i;
}

console.log(p1);

// Part 2
let crt: string[] = Array.from(Array(6), () => '');

for (let i = 0; i < 6; i++) {
  let n = i * 40;
  for (let j = n; j < n + 40; j++) {
    if (storage[j].x <= j - n + 1 && storage[j].x >= j - n - 1) crt[i] += '#';
    else crt[i] += '.';
  }
}

console.log(crt);
