export default class Rope {
  map: number[][];
  mapTail: number[][];
  head: number[];
  tail: number[];

  constructor() {
    this.map = Array.from(Array(1), () => new Array(1).fill(0));
    this.mapTail = Array.from(Array(1), () => new Array(1).fill(0));
    this.head = [this.map.length - 1, 0];
    this.tail = [this.map.length - 1, 0];
    this.map[this.head[0]][this.head[1]] = 1;
    this.mapTail[this.tail[0]][this.tail[1]] = 2;
  }

  moveHead(s: string) {
    const [dir, amount] = s.split(' ');
    if (dir === 'R') {
      for (let j = 0; j < Number(amount); j++) {
        this.head[1]++;
        this.map[this.head[0]][this.head[1]] = 1;
        for (const r in this.map) {
          if (this.map[r].length < this.map[this.head[0]].length) {
            this.map[r].push(0);
          }
        }
      }
    }

    if (dir === 'U') {
      for (let j = 0; j < Number(amount); j++) {
        if (this.head[0] === 0) {
          this.map.unshift(new Array(this.map[0].length).fill(0));
          this.map[0][this.head[1]] = 1;
        } else {
          this.head[0]--;
          this.map[this.head[0]][this.head[1]] = 1;
        }
      }
    }

    if (dir === 'L') {
      for (let j = 0; j < Number(amount); j++) {
        this.head[1]--;
        this.map[this.head[0]][this.head[1]] = 1;
      }
    }

    if (dir === 'D') {
      for (let j = 0; j < Number(amount); j++) {
        this.head[0]++;
        this.map[this.head[0]][this.head[1]] = 1;
      }
    }
  }

  moveTail(s: string) {
    const [dir, amount] = s.split(' ');
    if (dir === 'R') {
      for (let j = 0; j < Number(amount); j++) {
        this.tail[1]++;
        if (
          j === Number(amount) - 1 &&
          this.mapTail[this.tail[0]][this.tail[1]] !== 2
        ) {
          this.mapTail[this.tail[0]][this.tail[1]] = 0;
        } else {
          this.mapTail[this.tail[0]][this.tail[1]] = 2;
        }
        for (const r in this.mapTail) {
          if (this.mapTail[r].length < this.mapTail[this.tail[0]].length) {
            this.mapTail[r].push(0);
          }
        }
        this.moveTail(dir);
      }
    }

    if (dir === 'U') {
      for (let j = 0; j < Number(amount); j++) {
        if (this.tail[0] === 0) {
          this.mapTail.unshift(new Array(this.mapTail[0].length).fill(0));
          if (
            j === Number(amount) - 1 &&
            this.mapTail[this.tail[0]][this.tail[1]] !== 2
          ) {
            this.mapTail[this.tail[0]][this.tail[1]] = 0;
          } else {
            this.mapTail[this.tail[0]][this.tail[1]] = 2;
          }
          this.moveTail(dir);
        } else {
          this.tail[0]--;
          if (
            j === Number(amount) - 1 &&
            this.mapTail[this.tail[0]][this.tail[1]] !== 2
          ) {
            this.mapTail[this.tail[0]][this.tail[1]] = 0;
          } else {
            this.mapTail[this.tail[0]][this.tail[1]] = 2;
          }
          this.moveTail(dir);
        }
      }
    }

    if (dir === 'L') {
      for (let j = 0; j < Number(amount); j++) {
        this.tail[1]--;
        if (
          j === Number(amount) - 1 &&
          this.mapTail[this.tail[0]][this.tail[1]] !== 2
        ) {
          this.mapTail[this.tail[0]][this.tail[1]] = 0;
        } else {
          this.mapTail[this.tail[0]][this.tail[1]] = 2;
        }
        this.moveTail(dir);
      }
    }

    if (dir === 'D') {
      for (let j = 0; j < Number(amount); j++) {
        this.tail[0]++;
        if (
          j === Number(amount) - 1 &&
          this.mapTail[this.tail[0]][this.tail[1]] !== 2
        ) {
          this.mapTail[this.tail[0]][this.tail[1]] = 0;
        } else {
          this.mapTail[this.tail[0]][this.tail[1]] = 2;
        }
        this.moveTail(dir);
      }
    }
  }

  getSum(): number {
    let sum = 0;
    for (const i of this.mapTail) {
      for (const j of i) {
        if (j === 2) sum++;
      }
    }
    return sum;
  }
}
