// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// use的顺序决定了next等待的顺序
app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middlewar
});

app.use(async (ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
});

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});


// 这下面是一个例子，如果没有权限，就不会执行next了，而是返回403
// 也就是说，next之后的代码不会被执行。
app.use(async (ctx, next) => {
    if (await checkUserPermission(ctx)) {
        await next();
    } else {
        ctx.response.status = 403;
    }
});

app.use(async (ctx, next) =>{
    console.log('最后一个Next被成功调用了。')
})

let checkUserPermission = () => {
    return new Promise((resolve, reject) => { setTimeout(() => { resolve(true) }, 3000) })
}

app.listen(3000)