const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf8');

// Part 1
const marker = 4;
let count = 0;

for (let i = 0; i < data.length; i++) {
  for (let j = marker - 1; j > 0; j--) {
    for (let k = j - 1; k >= 0; k--) {
      if (data[i + j] == data[i + k]) {
        count++;
      }
    }
  }
  if (count == 0) {
    console.log(i + marker);
    i = data.length;
  }
  count = 0;
}

// Part 2
const marker2 = 14;
let count2 = 0;

for (let i = 0; i < data.length; i++) {
  for (let j = marker2 - 1; j > 0; j--) {
    for (let k = j - 1; k >= 0; k--) {
      if (data[i + j] == data[i + k]) {
        count2++;
      }
    }
  }
  if (count2 == 0) {
    console.log(i + marker2);
    i = data.length;
  }
  count2 = 0;
}
