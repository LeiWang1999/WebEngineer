const Video = require('./models/video.model')
const Record = require('./models/record.model')
const Sequelize = require('sequelize')
const { LOG_FLAG, DEBUG_FLAG } = require('./debug')
// 比较数组b比a删除的数据
let delete_msg = (a, b) => {
    return b.filter(function (i) {
        return a.indexOf(i) === -1
    })
}

// 

// 获取要删除的视频id列表
const FuncA = async () => {
    let VideoDbObj = await Video.findAll()
    // 获取视频的最大ID
    let lastId = VideoDbObj[VideoDbObj.length - 1].id
    if (LOG_FLAG) console.log("获取Video数据库完毕\r\n最后一个视频的主键是 ", lastId)
    // 应该的id序列
    let rawVideoIds = new Array(lastId)
    for (let index = 0; index < rawVideoIds.length; index++) {
        rawVideoIds[index] = index + 1
    }
    // 现在的id序列
    let currentVideoIds = new Array(VideoDbObj.length)
    for (let index = 0; index < VideoDbObj.length; index++) {
        const element = VideoDbObj[index]
        currentVideoIds[index] = element.id
    }

    // 得到已经被删除的视频id
    let deletedVideoIds = delete_msg(currentVideoIds, rawVideoIds)
    if (LOG_FLAG){console.log("已经被删除的视频有:", deletedVideoIds.length, "个")
    console.log("第一个视频id是 ", deletedVideoIds[0], "最后一个视频id是 ", deletedVideoIds[deletedVideoIds.length-1]);
    console.log(typeof(deletedVideoIds));
    
}
    let RecordvideoIdArray = await Record.findAll({
        attributes: [[Sequelize.literal('DISTINCT `videoId`'), 'videoId']]
    })
    if (LOG_FLAG) console.log("获取Record数据库完毕,RecordVideoArray长度为", RecordvideoIdArray.length);
    let rubbishId = new Array()

    RecordvideoIdArray.forEach(element => {
         if (deletedVideoIds.indexOf(element.videoId) != -1){
            rubbishId.push(element.videoId)
            console.log("需要被删除的id是 " , element.videoId)
         }
    })
    if (LOG_FLAG)
        console.log("经过对比Record，应该被删除的视频有:", rubbishId.length, "个")
    return rubbishId
}


const FuncB = async (rubbishId) => {
    await Record.destroy({
        where: {
            videoId: rubbishId
        }
    }).then(data => console.log(data)).catch(err => console.log(err))
    console.log("删除完毕");

}

    ; (async () => {
        let A = await FuncA()
        let B = await FuncB(A)

    })()