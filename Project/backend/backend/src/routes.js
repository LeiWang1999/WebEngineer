const Router = require('koa-router')
const { compose } = require('koa-convert')
const {UserController} = require('./controllers')
const userRoutes = new Router()
    .get('/detail', UserController.getDetail)
    .get('/routers', UserController.checkQuery)
    .get('/list',UserController.getRouterList)

PREFIX = '/api'
const router = new Router()
  .use(userRoutes.routes())

module.exports = () => compose([router.routes(), router.allowedMethods()])