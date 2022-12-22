export default class Storage {
  crates: string[];
  nCols: string;
  storage: string[][];
  constructor(crates: string[]) {
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

  isLetter(c: string): boolean {
    return /[a-zA-Z]/.test(c);
  }

  moveCrate(amount: number, from: number, to: number) {
    for (let i = 0; i < amount; i++) {
      let temp = this.storage[from - 1].pop();
      this.storage[to - 1].push(String(temp));
    }
  }

  // Part 2
  newMoveCrate(amount: number, from: number, to: number) {
    let temp = this.storage[from - 1].slice(
      this.storage[from - 1].length - amount,
      this.storage[from - 1].length
    );
    for (let i = 0; i < amount; i++) {
      this.storage[from - 1].pop();
    }
    this.storage[to - 1].push(...temp);
  }
}
