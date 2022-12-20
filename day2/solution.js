const fs = require('fs');

// A X rock
// B Y paper
// C Z scissor
// 1 rock 2 paper 3 scissor
// 0 L 3 D 6 W
const scoreGuide = {
  'A X': 4,
  'A Y': 8,
  'A Z': 3,
  'B X': 1,
  'B Y': 5,
  'B Z': 9,
  'C X': 7,
  'C Y': 2,
  'C Z': 6,
};

const data = fs.readFileSync('data.txt', 'utf8');

// Part 1
const split = data.split('\n');

let score = 0;
for (let i = 0; i < split.length; i++) {
  score += scoreGuide[split[i]];
}

console.log(score);

// Part 2
const newGuide = {
  'A X': 'A Z',
  'A Y': 'A X',
  'A Z': 'A Y',
  'B X': 'B X',
  'B Y': 'B Y',
  'B Z': 'B Z',
  'C X': 'C Y',
  'C Y': 'C Z',
  'C Z': 'C X',
};

let newPlaybook = [];
for (let i = 0; i < split.length; i++) {
  newPlaybook.push(newGuide[split[i]]);
}

let newScore = 0;
for (let i = 0; i < split.length; i++) {
  newScore += scoreGuide[newPlaybook[i]];
}

console.log(newScore);
