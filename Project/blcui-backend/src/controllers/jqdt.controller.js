const Jqdt = require("../db").Jqdt;

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
    let newArticle = new Jqdt(articleInfo);
    console.log(newArticle);
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
  }
};
