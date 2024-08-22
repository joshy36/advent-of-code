import fs from 'fs';
import findMarker from './utils';

const data = fs.readFileSync('data.txt', 'utf8');

// Part 1
console.log(findMarker(data, 4));

// Part 2
console.log(findMarker(data, 14));
