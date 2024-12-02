import fs from 'fs';

const data = fs.readFileSync('data.txt', 'utf8').split('\n');

console.log(data);

const potentialNumbers: Number[] = [];

for (let i = 0; i < data.length; i++) {
  let isNumberValid = true;
  let numberString = '';
  for (let j = 0; j < data[i].length; j++) {
    if (!Number.isNaN(Number(data[i][j]))) {
      if (numberString.length == 0 && j > 0 && data[i][j] != '.') {
        isNumberValid = false;
      }
      numberString += data[i][j];
    } else {
      if (numberString.length > 0) {
        potentialNumbers.push(Number(numberString));
        numberString = '';
      }
    }
  }
}

for (let i = 0; i < potentialNumbers.length; i++) {
  console.log(potentialNumbers[i]);
}
