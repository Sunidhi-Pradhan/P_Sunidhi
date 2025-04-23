const fs = require('node:fs');
const a = fs.readFileSync('file.txt');
console.log(a.toString());
console.log("Finished reading file");
