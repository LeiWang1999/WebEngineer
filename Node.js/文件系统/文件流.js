const fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '\\readMe.txt');
var myWriteStream = fs.createWriteStream(__dirname + '\\writeMe.txt');
myReadStream.setEncoding('utf-8');

var writeData = "Hello world";
myWriteStream.write(writeData);
myWriteStream.end();
myWriteStream.on('finished', function(){
    console.log('writeFinished');
});

// 管道是一样的
// myReadStream.pipe(myWriteStream);

// 常用事件
// data—有数据可读时触发
// end—没有数据可读时触发
// error—在接受或写入过程中发生错误
// finish—所有数据被写入到底层系统时触发

myReadStream.on('data', function(chunk){
    console.log('触发了数据事件');
    console.log(chunk);
})

myReadStream.on('end', function(data){
    console.log('触发了end事件');
    // console.log(data);
})