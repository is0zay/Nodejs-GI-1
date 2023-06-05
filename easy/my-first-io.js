const fs = require('fs');

const content = fs.readFileSync(process.argv[2]);
let newLines = content.toString().split("\n").length -1;
console.log(newLines);