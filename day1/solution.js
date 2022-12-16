const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) throw err;

  // Part 1
  const split = data.split('\n\n');
  const mapSplit = split.map((x) => x.split('\n'));
  const numbers = mapSplit.map((x) => x.map(Number));
  const sum = numbers.map((x) =>
    x.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0)
  );
  const max = Math.max(...sum);

  console.log(max);

  // Part 2
  let topThree = max;
  sum.splice(sum.indexOf(max), 1);

  for (let i = 0; i < 2; i++) {
    let max = Math.max(...sum);
    topThree += max;
    sum.splice(sum.indexOf(max), 1);
  }

  console.log(topThree);
});
