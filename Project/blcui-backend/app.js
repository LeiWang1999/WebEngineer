var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.log('数据库已创建');
    var dbase = db.db("test");
    var site_msg = {
        name: "hello",
        fuck: "123",
        nick: "prprpr"
    }
    dbase.collection("site").insertOne(site_msg, (err, res)=>{
        if (err) throw err
        console.log("文档插入成功", res)
        db.close()
    })
});