const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

const bodyParser = require('koa-bodyparser');

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

// 经过测试、发现如果有两个处理同一个url的get，那么只会触发第一个
router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
    console.log('我在后面,我也看看是谁先触发')
});

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
    console.log('我在最前面,我看看是谁先触发')
});

router.post('/signin', async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
});

// add router middleware:
app.use(router.routes());
// add bodyParser:
app.use(bodyParser());


app.listen(3000);
console.log('app started at port 3000...');
