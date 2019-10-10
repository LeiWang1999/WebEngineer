var util = require('util');

class rawObj {
    constructor() {
        this.name = 'Princeling';
        this.mail = '2230647190@qq.com';
        this.sayHello = function () {
            console.log(this.name, ' say', 'Hello World');
        };
    }
    showMail() {
        console.log(this.mail);
    }
}

class Sub {
    constructor(){
        this.name = 'Sub';
    }
}

util.inherits(Sub, rawObj);
newObjA = new rawObj();
console.log(newObjA.mail);
newObjA.sayHello();
newObjA.mail = 'nothing'
newObjA.showMail();


console.log(util.inspect(newObjA));
