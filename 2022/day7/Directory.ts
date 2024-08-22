export default class Directory {
  // name: string;
  // files: string[];
  // size: number
  // stuff: string[];
  directories: Directory[] = [];
  constructor(data: string[]) {
    for (let i = 0; i < data.length; i++) {
      const r = /\$ cd [a-z]/;
      if (r.test(data[i])) {
        let end;
        for (let j = i + 1; j < data.length; j++) {
          const r = /\$ cd /;
          if (r.test(data[j])) {
            end = j;
            j = data.length;
          }
        }
        console.log(data.slice(i + 2, end));
        this.directories.push(new Directory(data.slice(i + 2, end)));
      }
    }
  }
}
