const mongoose = require("mongoose");

// 建立连接
mongoose.connect("mongodb://127.0.0.1:27017/blcuiblog");

// 操作Users集合 需要定一个Schema
// 里面的字段和数据库里面的表一一对应，只用来定义模型，不具备操作数据库的能力
var UserSchema = mongoose.Schema({
  account: String,
  password: String,
  nickname: String,
  isAdmin: Boolean
});

// 操作需要使用moodle 即定义数据库模型
// 第一个参数：1.首字母大写；2.和数据库集合的名字对应（但是是复数对应关系，比如user对应的是users
// 第二个参数是，Schema
// 第三个参数是，实际要操作的表
var User = mongoose.model('User',UserSchema,'users');

// Find data
User.find({

},(err,doc)=>{
    if(err) throw err;
    
    console.log(doc);
});

// appand Data
var u = new User({
    account: "admin",
    password: "123456",
    nickname: "admin",
    isAdmin: false
})

u.save(err=> {if(err) console.log(err)})
