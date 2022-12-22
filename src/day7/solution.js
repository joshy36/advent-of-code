const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf8');

const split = data.split('\n');
const filter = split.filter((x) => isCharNumber(x[0]));
const dir = split
  .filter((x) => x.substring(0, 3) === 'dir')
  .map((x) => x.substring(4, x.length));
console.log(dir);

function isCharNumber(c) {
  return c >= '0' && c <= '9';
}
