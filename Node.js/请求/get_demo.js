var http = require('http');
var url = require('url');
var util = require('util');
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    var urlParsed = url.parse(req.url, true);
    var params = urlParsed.query;
    console.log(params);
    console.log(params.name);
    res.write("Name is :"+ params.name);
    res.end();
}).listen(3000);
