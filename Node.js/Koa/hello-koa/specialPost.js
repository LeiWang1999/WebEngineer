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


// 经过测试、发现如果有两个处理同一个url的get，那么只会触发第一个
router.get('/', async (ctx, next) => {
    ctx.response.type = 'text/html'
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});


router.post('/signin', async (ctx, next) => {
    console.log(ctx.request)

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



// 因为 use 是按顺序执行、所以bodyParser中间件要放在routes前面
// 不然怎么先解码、再读数据呢？
// add bodyParser:
app.use(bodyParser());


// add router middleware:
app.use(router.routes());


app.listen(3000);
console.log('app started at port 3000...');
