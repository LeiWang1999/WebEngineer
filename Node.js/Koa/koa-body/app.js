const Koa = require('koa')
const koaBody = require('koa-body')
const router = require('koa-router')()
const app = new Koa()


router.get('/', async (ctx) => {
    await ctx.render('index');
});

router.post('/', async (ctx) => {
    console.log(ctx.request.files);
    console.log(ctx.request.body);
    ctx.body = JSON.stringify(ctx.request.files);
});

app.use(koaBody({
    multipart: true, // 支持文件上传
    encoding: 'gzip',
    formidable: {
        // uploadDir: path.join(__dirname, 'public/upload/'), // 设置文件上传目录
        keepExtensions: true,    // 保持文件的后缀
        maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
        onFileBegin: (name, file) => { // 文件上传前的设置
            // console.log(`name: ${name}`);
            // console.log(file);
        },
    }
}));

app.use(router.routes())

app.listen(3000)