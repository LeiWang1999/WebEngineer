const fs = require('fs');

fs.unlink('write.txt', function(err){
    if(err) throw err;
    console.log('成功删除');
})
