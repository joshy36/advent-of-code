const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf8');

// Part 1
let sum = 0;
const split = data.split('\n');
for (let i = 0; i < split.length; i++) {
  let [first, last] = split[i].split(',');
  first = first.split('-');
  last = last.split('-');
  if (first[0] <= last[0] && first[1] >= last[1]) {
    sum++;
  } else if (first[0] >= last[0] && first[1] <= last[1]) {
    sum++;
  }
}

console.log(sum);

// Part 2
