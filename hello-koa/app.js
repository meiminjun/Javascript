const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
	  console.log("第一个执行开始")
    await next();
	  console.log("第一个执行完毕")
});

// response
app.use(async (ctx, next) => {
  console.log(`第二个开始`);
  await next(); // 调用下一个middleware
  console.log(`第二个完毕`)
});


// response
app.use(async (ctx, next) => {
	console.log(`第三个开始`);
	await next();
	console.log(`第三个完毕`)
});


// app.use(async (ctx, next) => {
// 		console.log("----执行路由---");
// 		console.log(ctx.request.path);
//     if (ctx.request.path === '/index') {
//     		console.log('执行index page')
//         ctx.response.body = '<h1>index page!</h1>';
//     }else {
//         await next();
//     }
// });

app.use(async (ctx, next) => {
	  let path = ctx.request.path;
    if (path === '/test') {
        ctx.response.body = 'TEST page';
    }else if(path === '/test2') {
        ctx.response.body = 'test 2';
    }else {
        await next();
    }
});

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');
