import fs from 'fs';
import formatData from './utils';

const data = fs.readFileSync('data.txt', 'utf8');

// Part 1
const d = formatData(data);

let sum = 0;
for (let i = 0; i < d.length; i += 2) {
  let [first1, first2, second1, second2] = [
    d[i][0],
    d[i][1],
    d[i + 1][0],
    d[i + 1][1],
  ];
  if (first1 <= second1 && first2 >= second2) {
    sum++;
  } else if (first1 >= second1 && first2 <= second2) {
    sum++;
  }
}

console.log(sum);

// Part 2
let sum2 = 0;
for (let i = 0; i < d.length; i += 2) {
  let [first1, first2, second1, second2] = [
    d[i][0],
    d[i][1],
    d[i + 1][0],
    d[i + 1][1],
  ];
  if (first1 <= second1 && first2 >= second1) {
    sum2++;
  } else if (second1 <= first1 && second2 >= first1) {
    sum2++;
  }
}

console.log(sum2);
