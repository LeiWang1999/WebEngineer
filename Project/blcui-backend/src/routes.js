const Router = require('koa-router')
const { compose } = require('koa-convert')
const {UserController, JqdtController} = require('./controllers')



const userRoutes = new Router({prefix:'/user'})
    .get('/detail', UserController.getDetail)
const jqdtRoutes = new Router({prefix:'/jqdt'})
    .get('/articleDetail/:id', JqdtController.getOneArticle)
    .post('/articalList',JqdtController.getArticle)
    .post('/saveArticle',JqdtController.saveArticle)
    .post('/updateArticle',JqdtController.updateArticle)
    .post('/deleteArticle',JqdtController.deleteArticle)
PREFIX = '/api'
const router = new Router({prefix:PREFIX})
  .use(userRoutes.routes())
  .use(jqdtRoutes.routes())

module.exports = () => compose([router.routes(), router.allowedMethods()])