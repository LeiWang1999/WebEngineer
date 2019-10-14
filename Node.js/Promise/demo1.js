var Pro = function (time, msg) {
    //返回一个Promise对象
    return new Promise(function (resolve, reject) {
        console.log('123');
        //模拟接口调用
        setTimeout(function () {
            //这里告诉Promise 成功了，然后去执行then方法的第一个函数
            resolve(msg);
        }, time);
    })
};
(function(){
    console.log('start');
    console.log(Pro(1000, '成功返回')
    .then(function(data){
        console.log(data);
        // 注意到，如果这里是直接return 1 那么下一个then接收到的就是1
        // return 1
        // 如果这一返回的是一个Promise对象，那么下一个then接受是resolve的值
        // 但是两者接收到的都是 Promise对象
        return Pro(3000, '第二次成功返回');})
    .then(function(data){
        console.log(data);
        console.log('end');
    }))
})();

(function(){
    console.log('Test Promise console')    
    let result = Pro(100, '1').then(function(data){
        console.log('第二次');
        return Pro(200, '3');
    })
    console.log(result);
})();