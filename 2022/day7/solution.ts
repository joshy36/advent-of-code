import fs from 'fs';
import Directory from './Directory';

let data = fs.readFileSync('data.txt', 'utf8');
let split = data.split('\n');

let directory = new Directory(split);

// for (let i = 0; i < split.length; i++) {
//   const r = /\$ cd [a-z]/;
//   if (r.test(split[i])) {
//     let end;
//     for (let j = i + 1; j < split.length; j++) {
//       const r = /\$ cd /;
//       if (r.test(split[j])) {
//         end = j;
//         j = split.length;
//       }
//     }
//     console.log(split.slice(i + 2, end));
//     // directories.push(new Directory(split.slice(i, end)));
//   }
// }

console.log(directory);

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
