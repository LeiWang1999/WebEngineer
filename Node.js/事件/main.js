var events = require('events');

// 创建对象
var eventEmitter = new events.EventEmitter();

// 编写事件处理函数
var ConnectHandler = function connected(msg) {
    console.log('连接成功');
    console.log('The msg is ' + msg);
    // 连接成功后触发 data_received 事件
    eventEmitter.emit('data_received');
}

var data_receivedHandler = function data_received(params) {
    console.log('数据接收完成');
}

eventEmitter.on('connected', ConnectHandler);
eventEmitter.on('data_received', data_receivedHandler);

eventEmitter.emit('connected', 'Hello');

console.log('程序执行完毕');