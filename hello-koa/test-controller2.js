const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const controller = require('./controllers/main.js');


const app = new Koa();

app.use(bodyParser());	//这个必须在router之前注册到app对象上

// 使用middleware:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');