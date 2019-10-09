var hello = require('./hello');
var objtect_hello = require('./objtect_hello');
hello.world();
var newobj = new objtect_hello();
newobj.setName('Princeling');
newobj.sayHello();
