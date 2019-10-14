const doSomethingAsync = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('I did something'), 3000)
    })
}


// async 虽然返回值是Promise对象，但是async函数的return就相当于resolve()了
const doSomething = async () => {
    doSomethingAsync().then(data => { console.log('This is a Data in then :' , data)})
    // 等待 Promise 处理完成。若 Promise 正常处理(fulfilled)，其回调的resolve函数参数作为 await 表达式的值
    console.log(await doSomethingAsync())
}

console.log('Before')
doSomething();
console.log('After')