const Koa = require('koa')
const cors = require('koa2-cors')
const routes = require('./src/routes')
const config = require('./src/config')
const app = new Koa()

app.use(
    cors({
        origin() {
            return config.siteUrl
        },
        credentials: true
    })
)

app.use(routes())
app.listen(3000, () => {
    console.log(`app started at port 3000!`)
})  