var fs = require('fs');

// 打开一个流:
var rs = fs.createReadStream('test.txt', 'utf-8');

rs.on('data', function (chunk) {
    console.log('DATA:')
    console.log(chunk);
});

rs.on('end', function () {
    console.log('END');
});

rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});


var ws1 = fs.createWriteStream('test.txt', 'utf-8');
ws1.write('使用Stream写入文本数据adsfasdfdfsdf...\n');
ws1.write('END.');
ws1.end();