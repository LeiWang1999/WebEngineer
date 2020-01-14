const Koa = require('koa')
const cors = require('koa2-cors')
const routes = require('./src/routes')
const config = require('./config')


const app = new Koa()
app.use(
  cors({
    origin(){
      return config.allowed_url
    },
    credentials: true
  })
)

app.use(routes())
const PORT = 7871
app.listen(PORT, () => {
  console.log(`app started at port ${PORT}!`)
})