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
