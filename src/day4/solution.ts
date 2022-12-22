import fs from 'fs';
import formatData from './utils';

const data = fs.readFileSync('data.txt', 'utf8');

// Part 1
const d = formatData(data);

let sum = 0;
for (let i = 0; i < d.length; i += 2) {
  if (d[i][0] <= d[i + 1][0] && d[i][1] >= d[i + 1][1]) {
    sum++;
  } else if (d[i][0] >= d[i + 1][0] && d[i][1] <= d[i + 1][1]) {
    sum++;
  }
}

console.log(sum);

// Part 2
let sum2 = 0;
for (let i = 0; i < d.length; i += 2) {
  if (d[i][0] <= d[i + 1][0] && d[i][1] >= d[i + 1][1]) {
    sum2++;
  } else if (d[i][0] >= d[i + 1][0] && d[i][1] <= d[i + 1][1]) {
    sum2++;
  }
}

console.log(sum2);
