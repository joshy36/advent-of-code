import fs from 'fs';

const data = fs.readFileSync('data.txt', 'utf8').split('\n');

const possibleIds: number[] = [];
let sumPower = 0;

for (let k = 0; k < data.length; k++) {
  const game = data[k]
    .split(':')[1]
    .split(';')
    .map((round) => round.split(','));

  let possible = true;
  let minRed = 0;
  let minBlue = 0;
  let minGreen = 0;
  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[i].length; j++) {
      const set = game[i][j].split(' ');
      if (set[2] == 'red' && Number(set[1]) > 12) {
        possible = false;
      } else if (set[2] == 'green' && Number(set[1]) > 13) {
        possible = false;
      } else if (set[2] == 'blue' && Number(set[1]) > 14) {
        possible = false;
      }
      if (set[2] == 'red' && Number(set[1]) > minRed) {
        minRed = Number(set[1]);
      } else if (set[2] == 'blue' && Number(set[1]) > minBlue) {
        minBlue = Number(set[1]);
      } else if (set[2] == 'green' && Number(set[1]) > minGreen) {
        minGreen = Number(set[1]);
      }
    }
  }
  if (possible) possibleIds.push(k + 1);
  sumPower += minRed * minGreen * minBlue;
}

let sum = 0;
for (let i = 0; i < possibleIds.length; i++) {
  sum += possibleIds[i];
}

console.log('Part 1: ', sum);
console.log('Part 2: ', sumPower);
