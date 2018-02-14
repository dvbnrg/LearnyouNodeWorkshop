var fs = require('fs');

var file = process.argv[2]
var content = fs.readFileSync(file)
var buffer = content.toString()
var buffer2 = buffer.split('\n').length
console.log(buffer2 - 1)