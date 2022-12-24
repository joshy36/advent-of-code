export default class Directory {
  // name: string;
  // files: string[];
  directories: Directory[] = [];
  constructor(data: string) {
    let split = data.split('\n');
    console.log(split);
    for
    this.directories.push(new Directory(split[0]));
    // this.files = data;
    // this.directories = data;
  }
}
