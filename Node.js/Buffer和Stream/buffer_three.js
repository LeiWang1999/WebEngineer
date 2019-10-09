var buf = Buffer.alloc(256)

var len = buf.write('Hello Node.js');

console.log('Buf is ', buf.toString('ascii'));
console.log('len is ', len);
console.log(buf.length);
