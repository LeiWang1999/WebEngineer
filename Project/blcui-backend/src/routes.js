const Router = require("koa-router");
const { compose } = require("koa-convert");
const {
  UserController,
  JqdtController,
  GrjjController,
  CbzzController,
  JszlController
} = require("./controllers");

const userRoutes = new Router({ prefix: "/user" }).get(
  "/detail",
  UserController.getDetail
);
const jqdtRoutes = new Router({ prefix: "/jqdt" })
  .get("/articleDetail/:id", JqdtController.getOneArticle)
  .post("/articalList", JqdtController.getArticle)
  .post("/saveArticle", JqdtController.saveArticle)
  .post("/updateArticle", JqdtController.updateArticle)
  .post("/deleteArticle", JqdtController.deleteArticle)
  .post("/uploadImage", JqdtController.uploadImage);
const grjjRoutes = new Router({ prefix: "/grjj" })
  .post("/detail", GrjjController.getInfo)
  .post("/updateDetail", GrjjController.updateInfo);
const cbzzRoutes = new Router({ prefix: "/cbzz" })
  .get("/bookDetail/:id", CbzzController.getOneBook)
  .post("/bookList", CbzzController.getBooks)
  .post("/saveBook", CbzzController.saveBook)
  .post("/updateBook", CbzzController.updateBook)
  .post("/deleteBook", CbzzController.deleteBook);
const jszlRoutes = new Router({ prefix: "/jszl" })
  .get("/articleDetail/:id", JszlController.getOneArticle)
  .post("/articalList", JszlController.getArticle)
  .post("/saveArticle", JszlController.saveArticle)
  .post("/updateArticle", JszlController.updateArticle)
  .post("/deleteArticle", JszlController.deleteArticle)
PREFIX = "/api";
const router = new Router({ prefix: PREFIX })
  .use(userRoutes.routes())
  .use(jqdtRoutes.routes())
  .use(grjjRoutes.routes())
  .use(cbzzRoutes.routes())
  .use(jszlRoutes.routes());

module.exports = () => compose([router.routes(), router.allowedMethods()]);
