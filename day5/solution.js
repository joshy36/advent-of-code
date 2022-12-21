const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf8');

// Part 1
class Storage {
  constructor(crates) {
    this.crates = crates;
    this.nCols = this.crates[crates.length - 1].charAt(
      this.crates[crates.length - 1].length - 2
    );
    this.storage = [...Array(Number(this.nCols))].map(() => Array());
    let count = 0;
    let spaces = 0;
    for (let i = crates.length - 1; i >= 0; i--) {
      for (let j = 0; j < crates[i].length; j++) {
        if (crates[i][j] === ' ' && crates[i][j - 1] === ' ') {
          spaces++;
        }
        if (spaces >= 4) {
          count++;
          spaces = 0;
        }
        if (this.isLetter(crates[i][j])) {
          this.storage[count].push(crates[i][j]);
          count++;
        }
      }
      count = 0;
    }
  }

  isLetter(c) {
    return /[a-zA-Z]/.test(c);
  }

  moveCrate(amount, from, to) {
    for (let i = 0; i < amount; i++) {
      let temp = this.storage[from - 1].pop();
      this.storage[to - 1].push(temp);
    }
    return this.storage;
  }
}

let [crates, instructions] = data.split('\n\n');
crates = crates.split('\n');

const s = new Storage(crates);
instructions = instructions.split('\n');
for (let i = 0; i < instructions.length; i++) {
  let split = instructions[i].split(' ');
  s.moveCrate(split[1], split[3], split[5]);
}

let answer = '';
for (const i of s.storage) {
  answer += i[i.length - 1];
}

console.log(answer);
