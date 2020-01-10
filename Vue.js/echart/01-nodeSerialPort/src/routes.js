const Koa = require('koa');
const { compose } = require('koa-convert')
// 注意require('koa-router')返回的是函数:
const Router = require('koa-router');
const app = new Koa();
const {SerialController} = require('../controllers')

// 串口路由
const SerialRoutes = new Router({ prefix: '/serial' })
    .post('/data', SerialController.serialOn)

const router = new Router()
    .use(SerialRoutes.routes())
module.exports = () => compose([router.routes(), router.allowedMethods()])
