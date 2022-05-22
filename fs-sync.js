const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5))
console.log("qantes da  apos o arquivo");
const dados  = fs.readFileSync("file.txt");

console.log("executado o console apos o arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));