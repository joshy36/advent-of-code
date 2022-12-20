const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf8');

// Part 1
console.log(data.replace(/ /g, ''));
