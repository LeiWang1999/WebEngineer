const {listen, connect, finished} = require("../common/telnet.client")
const {Routers, getRouters} = require('../models/routers.model')

module.exports = {
    getDetail: async(ctx)=>{
        ctx.body = {
            success: true,
            message: 'call GetDetail'
        }
    },
    getRouterList: async(ctx)=>{
        const routerlist = await getRouters()
        ctx.type = 'json'
        ctx.body = routerlist 
    },
    checkQuery: async(ctx) => {
        const request = ctx.request
        const req_query = request.query
        let {devicename, operation} = req_query
        let SuccessFlag = 0;
        let FailedFlag = 0;
        let resultdata
        devicename = devicename.replace(/"([^"]*)"/g, "$1")
        operation = operation.replace(/"([^"]*)"/g, "$1")
        console.log("device name is ", devicename, "Operation is ", operation)
        if(!devicename)
        { 
            ctx.body = {
                success: false,
                message: "please input devicename "
            }

        }else if(!operation){
            ctx.body = {
                success: false,
                message: "please input operation "
            }
        }
        else {
            let router = await Routers.findAll({
                where:{
                    name:devicename
                }
            })

            if (!router.length) { 
                ctx.body = {
                    success: false,
                    message: "device name error",
                }
            }else if (operation!='shutdown' && operation != 'noshutdown'){
                ctx.body = {
                    success: false,
                    message: "operation error",
                }               
            }else{
                const config = {
                'host' : router[0].host,
                'port' : router[0].port,
                'username' : router[0].username,
                'password' : router[0].password,
                'log' : true
                }                
                if(operation == 'shutdown')
                    batches = router[0].shutdownbatch
                else
                    batches = router[0].noshutdownbatch
                batches = batches.split(';')
                for (let index = 0; index < batches.length; index++) {
                    const element = batches[index];
                    batches[index] = element + ' \r\n'
                }
                
                console.log(router)
                const getdata = async (data)=>{
                    console.log(data)
                    resultdata += '<p>' + data.toString()+'</p>'
                    if (data.toString().indexOf(router[0].shellPromt) > -1) {
                        console.log("登录成功")
                        SuccessFlag = 1;
                    }else if(data.toString().indexOf("failed") > -1){
                        console.log("登陆失败")
                        FailedFlag = 1;
                    }
                }
                await listen(router[0].shellPromt, batches, getdata)
                await connect(config)
                await finished()
                async function delay(time) {
                    return new Promise(function(resolve, reject) {
                      setTimeout(function(){
                        resolve()
                      }, time)
                    })
                }
                await delay(10000);
                console.log("Succes flag is ", SuccessFlag, "Failed Flag is ", FailedFlag)
                if(SuccessFlag){
                    ctx.type = 'html'
                    ctx.body = `<h1>登陆成功</h1>
                                <p>执行的脚本内容为<p>
                    `+ batches.join(';\r\n')+`
                        数据内容为:
                    `+ resultdata
                }else if(FailedFlag){
                    ctx.type = 'html'
                    ctx.body = `<h1>登陆失败</h1>
                                <p>打印信息<p>`+resultdata
                }
            }

        }
    }
}
