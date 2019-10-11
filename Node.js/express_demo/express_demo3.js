var express = require('express')
var app = express()

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.writeHead('200', { "Content-Type": "text/html" })
    res.write('<h1>Hello World</h1>')
    res.end()
})

app.listen(3000, function () {
    console.log('开始侦听服务，端口为3000')
})