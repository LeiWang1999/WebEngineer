const fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '\\readMe.txt', 'utf-8');

// 常用事件
// data—有数据可读时触发
// end—没有数据可读时触发
// error—在接受或写入过程中发生错误
// finish—所有数据被写入到底层系统时触发

myReadStream.on('data', function(chunk){
    console.log(chunk);
})