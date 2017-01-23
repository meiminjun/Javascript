var register = require('babel-core/register');

register({
    presets: ['stage-2']
});

require('./server/app.js');
// require('./test-mysql.js');
