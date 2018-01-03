var fs = require('fs');
var file = process.argv[2]
var content = fs.readFile(file).toString().split('\n');
console.log(content.length - 1);