require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
var fs = require('fs')
var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})


const mockDir = path.resolve(__dirname, '../mock');

const host = config.hostname;
let targetHostname = ''
Object.keys(config.hostname).forEach(function(item,index) {

  if (item == config.env) {
    targetHostname = host[item].paebank; // 当前开发接口地址
  }
})

// 循环检查对应规则
Object.keys(config.url).forEach(function(item,index) {
  var file = path.join(mockDir,item+".js");
  var f = file.lastIndexOf("/") + 1;
  var a = file.substring(f)
  var b = a.slice(-3);
  fs.stat(file, function (err, stats) {
    if (err) {
      console.error("请检查mock中的%s是否与url文件中的保持规则一致",a)
      throw err
    }
    // if (stats.isFile()) {
    //   console.log("%s is file", file);
    // }
  })
})

fs.readdirSync(mockDir).forEach(function (file) {
  // let str = file.slice(0, -5);
  const mock = require(path.resolve(mockDir, file));
  if(!mock.name) {
    throw "在挡板接口中请写上你的接口name"
  }
  app.use(mock.api, config.env !== "dev" ? proxy({ target: targetHostname }) : mock.response)
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port + '/deposit_detail.html'

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
