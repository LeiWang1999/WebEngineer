const { Url } = require('./models/url.model')
const { Software } = require('./models/software.model')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { LOG_FLAG, DEBUG_FLAG } = require('./debug')


// 更新软件列表
const FuncA = async () => {
    // 获取233 path字段中包含202.119.248.233的内容
    let softwareFrom233 = await Software.findAll({
        where:{
            path:{
                [Op.like] : `%248.233%`
            }
        }
    })
    console.log(softwareFrom233.length)
    softwareFrom233.forEach(element => {
        let newPath = element.path.replace('248.233','245.233')
        element.update({
            path:newPath
        })
    });
}

// 更新视频列表
const FuncB = async () => {
    // 获取233 path字段中包含202.119.248.233的内容
    let urlFrom233 = await Url.findAll({
        where:{
            path:{
                [Op.like] : `%248.233%`
            }
        }
    })
    console.log(urlFrom233.length)
    urlFrom233.forEach(element => {
        let newPath = element.path.replace('248.233','245.233')
        element.update({
            path:newPath
        })
    });
}

;(async () => {
    await FuncA()
    console.log("Func A finished")
    await FuncB()
    console.log("Func B finished")
})()