const { search, batchSearch } = require('node-ecdict')
const textParse = require('./src/textParse')
const Koa = require('koa')
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')()


const app = new Koa()



// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
    await next()
})

router.get('/', async (ctx, next) => {
    var url = ctx.request.url;
    console.log('url is ', url)
    console.log(ctx.request)
    console.log(ctx.request.body)
    ctx.response.body=ctx.request.body.word
})

app.use(router.routes())
app.listen(3000)
console.log('backend start listen @port:3000')