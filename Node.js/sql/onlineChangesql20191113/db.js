const config = require('./config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host : config.host,
        port : config.port,
        dialect : 'mysql',
        pool : {
            // 最大最小连接数
            max : 5,
            min : 0,
            // 断开实例后的保留时间
            idle: 200000,
            // 请求超时时间
            acquire: 300000
        },
        dialectOptions: {
            dateStrings: true,
            typeCast: true
          },
          timezone: '+08:00',
          define: {
            timestamps: false
          }
    }
)
// 验证链接的函数
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })
module.exports = sequelize