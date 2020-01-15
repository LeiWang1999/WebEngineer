// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/blcuiblog',{useNewUrlParser:true,useUnifiedTopology:true});

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));

//用户
const userSchema = new mongoose.Schema({
    account: String,
    password: String,
    nickname: String,
    isadmin: Boolean,
    token: String,
})
//文章
const articleSchema = new mongoose.Schema({
    title: String,
    date: String,
    gist: String,
    content: String,
})
//个人简介
const grjjSchema = new mongoose.Schema({
    content:String,
    updatetime:String
})
//出版专著
const booksSchema = new mongoose.Schema({
    name: String,
    gist: String,
    buylink: String,
    updatetime: String,
})
//技术专栏
const techSchema = new mongoose.Schema({
    title: String,
    gist: String,
    videolink: String,
    updatetime: String,
})
//技术专栏
const techSchema = new mongoose.Schema({
    title: String,
    gist: String,
    videolink: String,
    updatetime: String,
})
/************** 定义模型Model **************/

const Models = {
    User: mongoose.model('User', userSchema, 'users'),
    Jqdt: mongoose.model('Jqdt', articleSchema, 'jqdt'),
    Grjj: mongoose.model('Grjj', grjjSchema, 'grjj'),
    Cbzz: mongoose.model('Cbzz', booksSchema, 'cbzz'),
    Jszl: mongoose.model('Jszl', techSchema, 'jszl')
}

module.exports = Models;