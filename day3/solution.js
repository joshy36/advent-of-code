const fs = require('fs');

let data = fs.readFileSync('data.txt', 'utf8');

// Part 1
let sum = 0;
const split = data.split('\n');
for (let i = 0; i < split.length; i++) {
  for (let j = 0; j < split[i].length / 2; j++) {
    for (let k = split[i].length / 2; k < split[i].length; k++) {
      if (split[i][j] === split[i][k]) {
        if (split[i].charCodeAt(j) < 97) {
          sum += split[i].charCodeAt(j) - 38;
        } else {
          sum += split[i].charCodeAt(j) - 96;
        }
        j = split[i].length;
      }
    }
  }
}

console.log(sum);

// Part 2
let sum2 = 0;
for (let i = 0; i < split.length; i += 3) {
  for (let j = 0; j < split[i].length; j++) {
    let regex = new RegExp(split[i][j]);
    if (regex.test(split[i + 1]) && regex.test(split[i + 2])) {
      if (split[i].charCodeAt(j) < 97) {
        sum2 += split[i].charCodeAt(j) - 38;
      } else {
        sum2 += split[i].charCodeAt(j) - 96;
      }
      j = split[i].length;
    }
  }
}

console.log(sum2);
