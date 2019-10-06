function counter(arr) {
    return 'There are '+ arr.length + ' in this arr';
}

function adder(a,b) {
    return a+b
}

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.PI = 3.14;