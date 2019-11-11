const Koa = require('koa');
let app = new Koa();

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.\
eyJpZCI6NTIsImlhdCI6MTU3MzA4OTE4NiwiZXhwIjoxN\
Tc1NjgxMTg2fQ.mMgmPKhPHFfwmdH8vYfUZlQLjgxPbpjynvr4d3yFGMc"

app.use(async ctx => {
    console.log(ctx)
    if (ctx.url === '/admin') {
        ctx.cookies.set('token', token, {
            domain: 'localhost',
            path: '/admin',   //cookie写入的路径
            maxAge: 1000 * 60 * 60 * 1,
            expires: new Date('2018-07-06'),
            httpOnly: false,
            overwrite: false
        }
        );
        ctx.body = 'cookies is seted;'
    } else {
        console.log(ctx.cookies.get('token'))
        if (ctx.cookies.get('username')) {
            ctx.body = 'welcome ' + ctx.cookies.get('username');
        } else {

            ctx.body = 'hello koa2'
        }
    }
});

app.listen(8081, () => {
    console.log('set cookie')
})