import fs from 'fs';

const data = fs.readFileSync('data.txt', 'utf8');
const split = data.split('\n');

let map: number[][] = Array.from(Array(1), () => new Array(1).fill(0));
let [row, col] = [map.length - 1, 0];
map[row][col] = 1;

for (let i = 0; i < split.length; i++) {
  const [dir, amount] = split[i].split(' ');
  if (dir === 'R') {
    for (let j = 0; j < Number(amount); j++) {
      col++;
      map[row][col] = 1;
    }
  }
  if (dir === 'U') {
    for (let j = 0; j < Number(amount); j++) {
      console.log(row);
      console.log(map.length - 1);

      map.unshift(new Array(map[0].length).fill(0));
      // row--;
      map[row][col] = 1;
    }
  }
  if (dir === 'L') {
    for (let j = 0; j < Number(amount); j++) {
      col--;
      map[row][col] = 1;
    }
  }
  // if (dir === 'D') {
  //   for (let j = 0; j < Number(amount); j++) {
  //     row++;
  //     map[row][col] = 1;
  //   }
  // }
}

console.log(map);

// .HHHH.
// .HHHHH
// HHHHHH
// ....H.
// HHHHH.

// ..##..
// ...##.
// .####.
// ....#.
// s###..
