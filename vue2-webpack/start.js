var register = require('babel-core/register');

register({
    presets: ['stage-3']
});
const model = require('./server/model.js');
require('./server/app.js');
// require('./test-mysql.js');
