// 导入事件库
var events = require('events');

var MyEmitter = new events.EventEmitter();

MyEmitter.on('someEvent', function (msg) {
    console.log(msg);
})

MyEmitter.emit('someEvent', 'something happen');

