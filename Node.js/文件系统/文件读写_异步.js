// 异步文件读写
var fs = require('fs');;
// 注册队列、开启另一个线程
var readMe = fs.readFile('readme.txt', 'utf-8', function(err, string){
    console.log(string);
    fs.writeFile('write.txt', 'utf-8', function(err){
        console.log('write finished');
    });
});
// 先输出finished
console.log("finished!");
