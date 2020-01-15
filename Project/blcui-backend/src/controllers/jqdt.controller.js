const Jqdt = require("../db").Jqdt;
const multiparty = require("multiparty");
const fs = require("fs")
const path = require('path');

module.exports = {
  getArticle: async ctx => {
    await Jqdt.find({}, (err, res) => {
      if (err) throw err;
      let dataSend = [];
      for (let i = 0; i < res.length; i++) {
        const element = res[i];
        let obj = {
          _id: element["_id"],
          date: element["date"],
          title: element["title"],
          gist: element["gist"]
        };
        dataSend.push(obj);
      }
      ctx.body = {
        success: true,
        message: dataSend
      };
    });
  },

  getOneArticle: async ctx =>{
      let articleId =  ctx.params.id
      await Jqdt.findOne({_id:articleId},(err, res)=>{
          if (err) throw err
          else {
              ctx.body = {
                  success: true,
                  info:res
              }
          }
      })
  },
  saveArticle: async ctx => {
    let request = ctx.request;
    let articleInfo = request.body["articleInfo"];
    console.log(articleInfo)
    let newArticle = new Jqdt(articleInfo);
    await newArticle.save(err => {
      if (err) throw err;
      else {
        console.log("保存成功");
        ctx.body = {
          success: true,
          message: "保存成功"
        };
      }
    });
    ctx.body = {
      success: true,
      message: "保存成功"
    };
  },
  updateArticle: async ctx => {
    let request = ctx.request;
    let articleInfo = request.body["articleInfo"];
    console.log(articleInfo)
    await Jqdt.findById(articleInfo._id,(err,res)=>{
        if (err)    throw err
        else {
            let obj = {
                'title': articleInfo.title,
                'date':articleInfo.date,
                'gist':articleInfo.gist,
                'content':articleInfo.content
            }
            Jqdt.updateOne({_id:articleInfo._id},obj,err=>{
                if (err) throw err
                else console.log("更新"+articleInfo._id+"成功")
            })
        }
    })
    ctx.body = {
      success: true,
      message: "更新成功"
    };
  },
  deleteArticle: async ctx => {
    let request = ctx.request;
    let articleId = request.body["articleId"];
    console.log(articleId)
    await Jqdt.deleteOne({_id:articleId}, (err,res)=>{
        if (err)
            throw err

    })
    ctx.body = {
      success: true,
      message: "更新成功"
    };
  },
  uploadImage: async ctx => {
    let form = new multiparty.Form();
    let D = Date.now();
    let saveImg = path.join(__dirname, '../../../blcui-fonted/src/static/jqdt/' + D + '.jpg');
    let pathImg = path.join(__dirname, './static/jqdt/' + D + '.jpg');
    console.log(saveImg);
    form.parse(ctx.req, function (err, fields, files) {
      const image = files.image; // 获取上传文件
      let rawPath = image[0].path;
     fs.copyFile(rawPath, saveImg, function (err) {//用fs写入文件
        if (err) {
            console.log(err);
        } else {
            console.log('写入成功！', saveImg);
        }
    })
  })
    ctx.body = {
        success:true,
        path:pathImg
    }
}
 
};
