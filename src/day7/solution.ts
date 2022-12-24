import fs from 'fs';
import Directory from './Directory';

let data = fs.readFileSync('data.txt', 'utf8');

console.log(data);
// let split = data.split('\n');
// const filter = split.filter((x) => isCharNumber(x[0]));
// const dir = split
//   .filter((x) => x.substring(0, 3) === 'dir')
//   .map((x) => x.substring(4, x.length));
// console.log(data);

function isCharNumber(c: string): boolean {
  return c >= '0' && c <= '9';
}

// let d = new Directory(data);

// split
// after $ cd /
// create dir from $ cd to next cd
// use name
