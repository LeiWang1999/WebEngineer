let testFunction = params => Object.keys(params).map(key => key + '=' + params[key]).join('&')
let value = testFunction('a')
console.log(value)

let testValue = 'Princeling'
let topFun = params => Object.keys(params)
console.log(topFun(testValue))

// let keyFun = (key,params) => key + '=' + params[key]
// map 的回调函数接受的是每个数组元素的值
let mapFun = params => Object.keys(params).map(key => key + '=' + params[key]).join('&')

console.log(mapFun(testValue))

