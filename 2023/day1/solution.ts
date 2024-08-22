import fs from 'fs';

const data = fs.readFileSync('data.txt', 'utf8').split('\n');

const dict = {
  nine: 9,
  eight: 8,
  seven: 7,
  six: 6,
  five: 5,
  four: 4,
  three: 3,
  two: 2,
  one: 1,
};

for (let i = 0; i < data.length; i++) {
  for (let key in dict) {
    if (data[i].includes(key)) {
      data[i] = data[i].replace(key, dict[key]);
    }
  }
}

console.log(data);

let sum = 0;
for (let i = 0; i < data.length; i++) {
  // filter out non-numeric characters
  data[i] = data[i].replace(/[^\d]/g, '');
  let num = parseInt(data[i][0] + data[i][data[i].length - 1]);
  console.log(num);
  sum += num;
}

console.log(sum);
