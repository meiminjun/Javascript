const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const controller = require('./controllers/main.js');


const app = new Koa();

const nunjucks = require('nunjucks');

function createEnv(path, opts) {
    var autoescape = opts.autoescape && true,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv('views', {
    watch: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
});

var s = env.render('hello.html', { name: '小明' });
console.log("111");
console.log(s);

app.use(bodyParser());	//这个必须在router之前注册到app对象上

// 使用middleware:
app.use(controller());



app.listen(3000);
console.log('app started at port 3000...');
