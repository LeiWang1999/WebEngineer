var SerialPort = require('serialport')
//Opening a Port
var serialPort = new SerialPort('COM6', {
    //波特率，可在设备管理器中对应端口的属性中查看
    baudRate: 115200,
    autoOpen: false
})
//连接串口后进行写入指令操作
serialPort.open(function (err) {
    console.log('IsOpen:', serialPort.isOpen)
    console.log('err:', err)
    if (!err) {
        serialPort.write("Hello Princeling")
    }
})
//指令监听
serialPort.on('data', function (data) {
    console.log('data received: ' + data)
})
//错误监听
serialPort.on('error', function (error) {
    console.log('error: ' + error)
})

//获取端口列表
SerialPort.list(function (error, ports) {
    ports.forEach(function (port) {
        console.log(port.comName);
        console.log(port.pnpId);
        console.log(port.manufacturer);
    });
})