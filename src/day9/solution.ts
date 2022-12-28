import fs from 'fs';

const data = fs.readFileSync('data.txt', 'utf8');
const split = data.split('\n');

let map: boolean[][] = [[true, true]];

console.log(split);
