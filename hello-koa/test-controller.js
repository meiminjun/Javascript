const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();
const fs = require('fs');

const app = new Koa();

app.use(bodyParser());	//这个必须在router之前注册到app对象上


var files = fs.readdirSync(__dirname + '/controllers');
console.log(files);

// 过滤出.js文件:
var js_files = files.filter((f)=>{
		console.log(f);
    return f.endsWith('.js');
});
console.log(js_files);

// 处理每个js文件
for(var f of js_files) {
	console.log(f);
	let mapping = require(__dirname + '/controllers/'+f);
	for(var url in mapping) {
		if(url.startWith('GET ')) {
			var path = url.substring(4);
			console.log(path);
			router.get(path, mapping[url]);
			console.log(`register URL mapping: GET ${path}`);
		}else if(url.startsWith('POST ')) {
			var path = url.substring(5);
			router.post(path,mapping[url]);
			console.log(`register URL mapping: POST ${path}`);
		}else {
			// 无效url
			console.log(`invalid URL: ${url}`);
		}
	}
}

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// add url-route:
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
});


// TODO:postman无法拿到请求入参？
router.post('/signin', async (ctx, next) => {
	  console.log(ctx.request);
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>密码错误</h1>
        <p><a href="/">Try again</a></p>`;
    }
});

// add router middleware:
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');