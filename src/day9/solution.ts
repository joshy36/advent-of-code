import fs from 'fs';

const data = fs.readFileSync('data.txt', 'utf8');
const split = data.split('\n');

let map: number[][] = Array.from(Array(1), () => new Array(1).fill(0));
let [row, col] = [map.length - 1, 0];
let [x, y] = [map.length - 1, 0];
map[x][y] = 1;
map[row][col] = 1;

for (let i = 0; i < split.length; i++) {
  const [dir, amount] = split[i].split(' ');
  if (dir === 'R') {
    for (let j = 0; j < Number(amount); j++) {
      col++;
      map[row][col] = 1;
      for (const r in map) {
        if (map[r].length < map[row].length) {
          map[r].push(0);
        }
      }
    }
  }
  if (dir === 'U') {
    for (let j = 0; j < Number(amount); j++) {
      console.log('   ', map.length);
      console.log('row', row + 1);
      if (row + 1 === map.length) {
        map.unshift(new Array(map[0].length).fill(0));
        // console.log(map);

        map[row][col] = 1;
        row++;
        console.log(map);
      }
      // } else {
      // row--;
      // map[row][col] = 1;
    }
    // }
  }
  if (dir === 'L') {
    for (let j = 0; j < Number(amount); j++) {
      col--;
      map[row][col] = 1;
    }
  }
  if (dir === 'D') {
    for (let j = 0; j < Number(amount); j++) {
      row++;
      map[row][col] = 1;
    }
  }
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
