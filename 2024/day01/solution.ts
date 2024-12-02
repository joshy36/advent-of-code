import fs from 'fs';

const data = fs.readFileSync('data.txt', 'utf8').split('\n');

let leftList: number[] = [];
let rightList: number[] = [];

for (let i = 0; i < data.length; i++) {
  const line = data[i].split(' ');
  leftList.push(Number(line[0]));
  rightList.push(Number(line[line.length - 1]));
}

leftList.sort();
rightList.sort();

let totalDistance = 0;

for (let i = 0; i < data.length; i++) {
  totalDistance += Math.abs(leftList[i] - rightList[i]);
}

console.log(totalDistance);

let dict: { [key: number]: number } = {};

for (let i = 0; i < rightList.length; i++) {
  dict[rightList[i]] = (dict[rightList[i]] ?? 0) + 1;
}

let similarityScore = 0;

for (let i = 0; i < leftList.length; i++) {
  similarityScore += leftList[i] * (dict[leftList[i]] ?? 0);
}

console.log(similarityScore);
