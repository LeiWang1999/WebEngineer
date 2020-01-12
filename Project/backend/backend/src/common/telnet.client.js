const Telnet = require('./util-telnet')
let connect = new Telnet()

async function delay(time) {
    return new Promise(function(resolve, reject) {
      setTimeout(function(){
        resolve()
      }, time)
    })
}

module.exports = {
    connect: async (config) => {
        connect.connect(config)
    },
    listen: async (shellPromt, batches, getdata) => {
        let writingFlag = 1
        let batchIndex = 0
        const batchesLenth = batches.length
        console.log("总共要发送的命令有",batchesLenth+1, "个")
        connect.on('data', async function (data) {
            getdata(data.toString())
            if (data.toString().indexOf(shellPromt) > -1) {               
                if(writingFlag){
                    writingFlag = 0
                    connect.write(batches[batchIndex])
                    console.log("正在发送第", batchIndex+1, "个命令", batches[batchIndex])
                    // await delay(200)
                    writingFlag = 1

                    if(batchIndex != batchesLenth)
                    batchIndex++
                }
            }
        }
        );
        connect.on('connect', function () {
            console.log("connect");
        });
        connect.on('error', function (error) {
            console.log("error", error);
        });
        connect.on('timeout', function () {
            console.log("timeout");
        });
        connect.on('close', function (had_error) {
            console.log("close", had_error);
        });
        connect.on('end', function () {
            console.log("end");
        });
    },
    finished: async ()=>{
        console.log("finished")
    }
}