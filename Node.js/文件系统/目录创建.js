const fs = require('fs');

fs.mkdir('newDirByCreate', function (err) {
    if (err) throw err;
    console.log('Mkdir Suc');
    fs.readFile('readMe.txt', function (err, string) {
        if (err) throw err;
        console.log('ReadFile Suc');
        fs.writeFile('./newDirByCreate/write.txt', string, function (err) {
            if (err) throw err;
            console.log('Write Suc');
        });
    });
});