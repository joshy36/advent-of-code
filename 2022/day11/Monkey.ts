export default class Monkey {
  number: number;
  items: number[];
  operation: string;
  // First number divisible by
  // Second number if true
  // Third number if false
  test: number[];
  inspections: number;

  constructor(s: string[]) {
    let items = s[1].match(/\d+/g)!;
    this.number = this.findNumber(s[0]);
    this.items = [...items].map((s) => Number(s));
    this.operation = s[2].split('=')[1].replaceAll(' ', '');
    this.test = [
      this.findNumber(s[3]),
      this.findNumber(s[4]),
      this.findNumber(s[5]),
    ];
    this.inspections = 0;
  }

  findNumber(s: string): number {
    return Number(s.match(/\d+/g)?.join());
  }

  inspect(monkeys: Monkey[]) {
    for (let i = 0; i < this.items.length; i++) {
      let o = this.operation.replaceAll('old', String(this.items[i]));
      // Calculate new worry amount
      if (o.includes('*')) {
        this.items[i] = Math.floor(
          (Number(o.split('*')[0]) * Number(o.split('*')[1])) / 3
        );
      } else {
        this.items[i] = Math.floor(
          (Number(o.split('+')[0]) + Number(o.split('+')[1])) / 3
        );
      }

      // Throw item to corresponding monkey
      if (this.items[i] % this.test[0] === 0) {
        monkeys[this.test[1]].items.push(this.items.shift()!);
        i--;
      } else {
        monkeys[this.test[2]].items.push(this.items.shift()!);
        i--;
      }
      this.inspections++;
    }
  }
}
