var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
app = express()

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var multer  = require('multer');
 
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));

app.get('/index.html', function(req,res) {
   console.log('正在访问 index.html 写入数据中') 
   res.sendFile(__dirname+ "/" +'index.html')
})

app.get('/process_get', function(req, res){
    console.log('接收到Get表单了!')
    var response = req.query;

    res.send(response);
})

app.post('/process_post', urlencodedParser, function(req, res){
    console.log('接收到Post表单了!')
    var response = req.body;

    res.send(response);
})

app.post('/file_upload', function(req, res){
    console.log('接收到一个文件上传请求了!')
    console.log('打印文件信息')
    console.log(req.files);
    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
         fs.writeFile(des_file, data, function (err) {
          if( err ){
               console.log( err );
          }else{
                response = {
                    message:'File uploaded successfully', 
                    filename:req.files[0].originalname
               };
           }
           console.log( response );
           res.end( JSON.stringify( response ) );
        });
    });
})

app.listen(3000);
