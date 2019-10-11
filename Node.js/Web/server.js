http = require('http');
url = require('url');
fs = require('fs');

http.createServer(function(req, res){ 
    // 解析请求 包括文件名
    var pathname = url.parse(req.url).pathname;
    console.log('request for', pathname.substr(1), ' received');
    fs.readFile(pathname.substr(1), function(err, data){
        if(err){
            throw err;
        }
        else{
            res.writeHead('200', 'text/html');
            res.write(data);
            res.end();
        }
    });
}).listen(3000);
