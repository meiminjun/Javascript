const path = require('path')
const fs = require('fs')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config.js')

const config = require('./config');
console.log(`------config-------`)
console.log(config);

var proxy = require('http-proxy-middleware');

const app = express(),
     mount = express();
const compiler = webpack(WebpackConfig)

const env = process.env.NODE_ENV || 'dev';
const publicPath = {
    'dev':'',
    // 'dev':'http://localhost:'+port+'/',
    'stg':'',
    'prd':''
};
app.use(webpackDevMiddleware(compiler, {
  publicPath: '',
  noInfo: true,
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler))

// app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, "./"), {
	maxAge: 365 * 24 * 60 * 60
}));


const mockDir = path.resolve(__dirname, './mock');
console.log(mockDir);

const host = config.hostname;
let targetHostname = '';
Object.keys(config.hostname).forEach(function(item,index) {
  if (item == config.env) {
    targetHostname = host[item].paebank;
  }
})
// Object.keys(config.url).forEach(function(item,index) {
//   var file = path.join(mockDir,item);

//   fs.stat(file, function (err, stats) {
//     if (err) throw err;
//     console.log(`进入读取`);
//     if (stats.isFile()) {
//       console.log("%s is file", file);
//     }
//     else if (stats.isDirectory()) {
//       console.log("%s is a directory", file);
//     }
//     console.log('stats:  %s', JSON.stringify(stats));
//   });


//   try {
//     var isFile = fs.existsSync(file)
//   }catch {
//     process.stdout.write("不存在文件:" + a + '\n');
//   }

//   var f = file.lastIndexOf("/") + 1;
//   var a = file.substring(f)
//   console.log(file);
//   var stats = fs.statSync(file);

//   if(!isFile) {
//     process.stdout.write("不存在文件:" + a + '\n');
//   }
// })

fs.readdirSync(mockDir).forEach(function (file) {
  // let str = file.slice(0, -5);

  // TODO:如果没有写名称则停止

  const mock = require(path.resolve(mockDir, file));
  app.use(mock.api, config.env !== "dev" ? proxy({ target: targetHostname }) : mock.response);
  // mount.use(mock.api, mock.response);
});

// mount.use('/api', proxy({target: 'http://localhost:3000', changeOrigin: true}));
//与测试和native浏览地址保持一致
mount.use('/omm/mobile/', app);

// mock 数据
mount.use('/',require('./mockdata/handler.js'))

const port = process.env.PORT || 8088
module.exports = mount.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})
