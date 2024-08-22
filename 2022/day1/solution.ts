import fs from 'fs';

const data = fs.readFileSync('data.txt', 'utf8');

// Part 1
const sum = data
  .split('\n\n')
  .map((x) => x.split('\n'))
  .map((x) => x.map(Number))
  .map((x) =>
    x.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0)
  );
const max = Math.max(...sum);

console.log(max);

// Part 2
let topThree = max;
sum.splice(sum.indexOf(max), 1);

for (let i = 0; i < 2; i++) {
  let max = Math.max(...sum);
  topThree += max;
  sum.splice(sum.indexOf(max), 1);
}

console.log(topThree);
