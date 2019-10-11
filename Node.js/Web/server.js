/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 17:55:00
 * @LastEditTime: 2019-10-11 19:08:41
 * @LastEditors: Seven
 */
// http 这个模块就是帮忙创建编写服务器的
http = require('http');
url = require('url');
fs = require('fs');

// 使用该方法创建一个服务
/**
 * @description:
 * 服务器的做用？
 *  提供服务
 *  发请求
 *  接受请求
 *  处理请求
 *  发送响应 
 * @param {type} 
 * @return: 
 */
var server = http.createServer(function(req, res){ 
    // // 解析请求 包括文件名
    // var pathname = url.parse(req.url).pathname;
    // console.log('request for', pathname.substr(1), ' received');
    // fs.readFile(pathname.substr(1), function(err, data){
    //     if(err){
    //         throw err;
    //     }
    //     else{
    //         res.writeHead('200', 'text/html');
    //         res.write(data);
    //         res.end();
    //     }
//    });
}).listen(3000);

server.on('request', function(req, res) {
    console.log('i received a request this url is  ', req.url);

    res.writeHead('200', 'text/html')
    // res.write('<h1>Hello</h1>')
    // 话说完了，可以呈递给用户了
    res.end(JSON.stringify([{a:1},{b:2}]))
})
