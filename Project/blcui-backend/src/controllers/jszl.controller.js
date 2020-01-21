const Jszl = require("../db").Jszl;

module.exports = {
  getArticle: async ctx => {
    let page = ctx.request.body.page;
    if (!page) {
      page = 1;
    }
    let limit = ctx.request.body.limit;
    let totalLength = await Jszl.countDocuments();
    let res = await Jszl.find({})
      .sort({ _id: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    let dataSend = [];
    for (let i = 0; i < res.length; i++) {
      const element = res[i];
      let obj = {
        _id: element["_id"],
        createtime: element["createtime"],
        updatetime: element["updatetime"],
        content: element["content"],
        title: element["title"],
        gist: element["gist"],
        videolink: element["videolink"],
        clicktime: element["clicktime"]
      };
      dataSend.push(obj);
    }
    ctx.body = {
      success: true,
      message: dataSend,
      totalLength: totalLength
    };
  },
  getNewestArticle: async ctx => {
    let request = ctx.request;
    let limit = request.body["limit"];
    await Jszl.find().sort({ _id: -1 });
  },
  getOneArticle: async ctx => {
    let articleId = ctx.params.id;
    await Jszl.findOne({ _id: articleId }, (err, res) => {
      if (err) throw err;
      else {
        ctx.body = {
          success: true,
          info: res
        };
      }
    });
  },
  saveArticle: async ctx => {
    let request = ctx.request;
    let articleInfo = request.body["articleInfo"];
    let newArticle = new Jszl(articleInfo);
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
    console.log(articleInfo);
    await Jszl.findById(articleInfo._id, (err, res) => {
      if (err) throw err;
      else {
        let obj = {
          title: articleInfo.title,
          updatetime: articleInfo.updatetime,
          gist: articleInfo.gist,
          content: articleInfo.content,
          videolink: articleInfo.videolink,
          clicktime: articleInfo.clicktime
        };
        Jszl.updateOne({ _id: articleInfo._id }, obj, err => {
          if (err) throw err;
          else console.log("更新" + articleInfo._id + "成功");
        });
      }
    });
    ctx.body = {
      success: true,
      message: "更新成功"
    };
  },
  deleteArticle: async ctx => {
    let request = ctx.request;
    let articleId = request.body["articleId"];
    console.log(articleId);
    await Jszl.deleteOne({ _id: articleId }, (err, res) => {
      if (err) throw err;
    });
    ctx.body = {
      success: true,
      message: "更新成功"
    };
  }
};
