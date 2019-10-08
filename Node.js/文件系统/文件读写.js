// 同步文件读写
var fs = require('fs');;
// 同步读、等文件都读完才执行下一句
var readMe = fs.readFileSync('readme.txt');
console.log(readMe);
console.log('finished');
fs.writeFileSync('write.txt', readMe);
