const formatData = (input: string) => {
  let nums: number[][] = [];
  let data = input.split('\n');
  for (let i = 0; i < data.length; i++) {
    let newsplit = data[i].split(',');
    nums.push(...newsplit.map((x) => x.split('-').map(Number)));
  }
  return nums;
};

export default formatData;
