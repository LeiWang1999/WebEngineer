const SerialPort = require('serialport')

// //Opening a Port
var serialPort = new SerialPort('/dev/tty.usbserial-1480', {
    //波特率，可在设备管理器中对应端口的属性中查看
    baudRate: 115200,
    autoOpen: false
})
let SerialData = 0
module.exports = {
    SerialData,
    serialOpen: () => {
        //连接串口后进行写入指令操作
        serialPort.open(function (err) {
            console.log('IsOpen:', serialPort.isOpen)
            console.log('err:', err)
        })
    },
    serialOn: async (ctx) => {
        console.log("Revice data serial req")\
        
        serialPort.on('data', function (data) {
            console.log("received data is ", data)
        })
        ctx.type = 'json'
        ctx.body = {
          success: true,
          message: '添加成功',
          content: {}
        }
    },
    serialList: async () => {
        //获取端口列表
        const list = await SerialPort.list()
        return list
    },

}