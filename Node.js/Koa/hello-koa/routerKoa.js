const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// add url-route:
// 此处url中如果出现了冒号，则表明该文本被作为了一个参数
router.get('/hello/:name', async (ctx, next) => {
    var url = ctx.request.url;
    var name = ctx.params.name;
    console.log('url is ', url)
    console.log('param is ', ctx.params)
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
});

// add router middleware:
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');
