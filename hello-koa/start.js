var register = require('babel-core/register');

register({
    presets: ['stage-3']
});

// require('./app.js');
require('./test-Nunjucks.js');
console.log("测试新功能");
