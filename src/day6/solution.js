const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf8');

// Part 1
console.log(findMarker(data, 4));

// Part 2
console.log(findMarker(data, 14));

function findMarker(data, marker) {
  for (let i = 0; i < data.length; i++) {
    let isMarker = true;
    for (let j = marker - 1; j > 0; j--) {
      for (let k = j - 1; k >= 0; k--) {
        if (data[i + j] == data[i + k]) {
          isMarker = false;
        }
      }
    }
    if (isMarker === true) {
      return i + marker;
    }
  }
}
