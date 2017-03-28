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

const mockDir = path.resolve(__dirname, '../mock')
var openProxy = config.isproxy || false // 是否开启代理
var x = 0
var i = 0
// 循环检查对应规则
Object.keys(config.url).forEach(function (item, index) {
  x++
  var file = path.join(mockDir, item + '.js')
  var f = file.lastIndexOf('/') + 1
  var a = file.substring(f)
  fs.stat(file, function (err, stats) {
    if (err) {
      console.error('请检查mock中的%s是否与url文件中的保持规则一致', a)
      throw err
    }
  })
})

fs.readdirSync(mockDir).forEach(function (file) {
  var error
  let str = file.slice(0, -3)
  var api = '/api/' + str
  console.log('-------开始------')
  console.log(str)

  console.log(api)
  console.log('-------结束------')
  if (!config.url[str]) {
    error = '请保持url中缺少（ ' + str + ' ）的配置,请仔细检查'
    throw error
  }
  i++
  const mock = require(path.resolve(mockDir, file))
  console.log('------mock---')
  if (!mock.name) {
    error = '在挡板接口中请写上你的接口name'
    throw error
  }
  var proxObj = null
  var targetHostname = ''
  // 不是mock的情况
  if (process.env.NODE_ENV !== 'web') {
    if (!mock.env) {
      error = '在挡板接口中请写上你的接口环境'
      throw error
    }
    const host = config.hostname
    Object.keys(host).forEach(function (item, index) {
        // TODO:添加一个prd环境的if
      if (item === process.env.NODE_ENV) {
        if (mock.env) {
          targetHostname = host[item][mock.env]
          if (typeof targetHostname === 'undefined') {
            error = '请检查你的mock文件（ ' + str + ' ）中的env是否配置正确'
            throw error
          }
          console.log('------(targetHostname)-------')
          console.log(host[item])
          console.log(targetHostname)
          proxObj = proxyMiddleware({ target: targetHostname, changeOrigin: true })
        } else {
          console.log('------(targetHostname)-------')
          targetHostname = host[item][process.env.NODE_ENV].default
          console.log(targetHostname)
          proxObj = proxyMiddleware({ target: targetHostname, changeOrigin: true })
        }
        console.log('域名')
        console.log(targetHostname)
        api = config.url[str]
        if (typeof api === 'undefined') {
          console.error('请检查你的config/url和mock中 （' + file + '） 是否配置存在')
        }
        console.log('接口名:' + api)
        if (openProxy) {
          app.use(api, proxObj)
        }
      }
    })
  } else {
    console.info('-----本地开发模式----')
    proxObj = mock.response
    if (typeof proxObj === 'function') {
      app.use(api, proxObj)
    } else {
      error = '请仔细检查 （' + str + ' ）中的格式是否正确'
      throw error
    }
  }
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
app.use(staticPath, express.static(path.resolve(__dirname, config.dev.staticPath)))
// app.use(staticPath, express.static('./static'))

// var uri = 'http://localhost:' + port
var uri = 'http://localhost:' + port + '/deposit_detail.html'

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
