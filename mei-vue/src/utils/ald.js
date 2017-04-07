import * as aladdin from 'aladdin'
import bow from 'bow'
import * as types from '../store/types'
import { tryLogin } from './acc'
import config from '../../config'
// import loading from 'loading'

var emptyFunction = function () {}
/**
 * ald和bow接口封装
 */
export function isAladdinHybrid () {
  const ua = navigator.userAgent + ''
  return ua.indexOf('AladdinHybrid') !== -1
}

let requestCount = 0
const needLoginCode = ['291007', '291005', '291001']
// 请求相关
export const http = {
  request: function (options, cb) {
    if (requestCount++ === 0) {
      window.__store.commit(types.COMMON_LOADING, true)
    }
    bow.http.request(options, function (err, res) {
      if (requestCount === 0 || --requestCount === 0) {
        window.__store.commit(types.COMMON_LOADING, false)
      }
            // 公共异常处理
      if (err) {
        return console.info('服务器异常', err)
      }
            // console.log(res);
      let json
      try {
        json = JSON.parse(res.body)
      } catch (e) {
        json = null
      }
      let responseCode = json && json.responseCode ? json.responseCode : ''
      // 在列表内的代码需要登录～
      if (needLoginCode.indexOf(responseCode) !== -1) {
        tryLogin()
      } else {
        cb(json || {})
      }
    })
  },
  /**
   * 请求方法
   * @param  {[type]} options [qs:请求参数，url:请求地址，method:请求方式（默认post）]
   * @return {[type]}         [description]
   */
  fetch: function (options) {
    var beforeSend = options.beforeSend || emptyFunction
    var complete = options.complete || emptyFunction
    var interfaceEnv = ENV
    var hostname = ''
    var otherHostName = ''
    if (options && typeof options.url === 'undefined') {
      console.error('请检查你的请求url是否存在')
      return
    }
    if (!config.url[options.url]) {
      console.error('请检查你的config/url中里是否设置接口url')
      return
    }
    // stg或者是prd环境
    if (interfaceEnv !== 'web') {
      if (!config.hostname[interfaceEnv]) {
        console.error('请检查config/index中是否有该环境')
        return
      }
      hostname = config.hostname[interfaceEnv].default
      if (process.env.NODE_ENV !== 'development') {
        // 如果接口，有其他环境，请自行添加config/index中的hostname中stg对象中添加对应的域名
        // 请检查stg测试接口中是否有除default的其他环境接口，如果有，那么请检查生产环境prd下是不是也会有同样的情况，有的话也一定要在config/index中的hostname中prd中加上同样的生产域名
        if (interfaceEnv !== 'prd' && options.env) {
          otherHostName = config.hostname[interfaceEnv][options.env]
          if (otherHostName) {
            options.url = otherHostName + config.url[options.url]
          } else {
            options.url = hostname + config.url[options.url]
          }
        } else {
          // 生产环境
          options.url = hostname + config.url[options.url]
        }
      } else {
        // 代理开关
        if (!config.isproxy) {
          otherHostName = config.hostname[interfaceEnv][options.env]
          if (otherHostName) {
            options.url = otherHostName + config.url[options.url]
          } else {
            options.url = hostname + config.url[options.url]
          }
        } else {
          // 本地开发调试(跨域)
          options.url = config.url[options.url]
        }
      }
    } else if (interfaceEnv === 'web') { // 本地mock调试
      options.url = 'api/' + options.url
    }
    // 请求之前
    function _beforeSend () {
      if (requestCount++ === 0) {
        window.__store.commit(types.COMMON_LOADING, true)
        if (bow.loading) {
          console.dir(bow.loading)
          bow.loading.start({ canCancel: false })
        } else {
          console.warn('bow.loading plugin is needed!')
        }
      }
      beforeSend()
    }
    // 请求之后
    function _complete () {
      if (requestCount === 0 || --requestCount === 0) {
        window.__store.commit(types.COMMON_LOADING, false)
        if (bow.loading) {
          bow.loading.stop()
        } else {
          console.warn('bow.loading plugin is needed! ')
        }
      }
      complete()
    }
    const defaultOptions = {
      url: '',  // 请求地址
      method: 'POST', // 请求方式
      qs: null, // 请求参数
      timeout: 60000,
      xhrFields: {withCredentials: true}
    }
    options = Object.assign({}, defaultOptions, options)
    // if (requestCount++ === 0) {
    //   window.__store.commit(types.COMMON_LOADING, true)
    // }
    return new Promise((resolve, reject) => {
      _beforeSend()
      bow.http.request(options, function (err, res) {
        _complete()
        // 公共异常处理
        if (err) {
          if (String(err.code) === '404') {
            console.error('没有该接口:' + options.url)
          } else {
            console.error('服务器异常', err)
          }
          return
        }
        let json
        try {
          json = JSON.parse(res.body)
        } catch (e) {
          console.error('json解析错误', e)
          json = null
        }

        let responseCode = json && json.responseCode ? json.responseCode : ''
        if (needLoginCode.indexOf(responseCode) !== -1) {
          tryLogin()
        } else {
          resolve(json || {})
        }
      })
    })
  }
}

// 跳转相关
export const navigator = {
  forward: function (options) {
    bow.navigator.forward(options)
  },
  back: function () {
    bow.navigator.back()
  }
}

// function doForward (opts) {
//   let url = opts.url
//   let ua = navigator.userAgent + ''
//   if (/android/ig.test(ua) && history.replaceState && (!/(http:|https:)/g.test(url) || url.indexOf(location.origin) != -1)) {
//     history.replaceState(null, document.title, url)
//     history.go(0)
//     if (navigator.userAgent.match(/QQBrowser/ig)) { // 处理qq浏览器不会刷新的bug
//       location.reload()
//     }
//   } else {
//     window.location.replace(url)
//   }
// }

function _toQueryPair (key, value) {
  if (typeof value === 'undefined') {
    return key
  }
  return key + '=' + encodeURIComponent(value === null ? '' : String(value))
}

/**
 * 将对象解析成查询参数
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 * _toQueryString({
 *   name : 'xesam',
 *   age : 24
 * })); //name=xesam&age=24
 * _toQueryString({
 *  name : 'xesam',
 *  age : [24,25,26]
 *  }) //name=xesam&age=24&age=25&age=26
 */
function _toQueryString (obj) {
  var ret = []
  for (var key in obj) {
    key = encodeURIComponent(key)
    var values = obj[key]
    if (values && values.constructor === Array) { // 数组
      var queryValues = []
      for (var i = 0, len = values.length, value; i < len; i++) {
        value = values[i]
        queryValues.push(_toQueryPair(key, value))
      }
      ret = ret.concat(queryValues)
    } else { // 字符串
      ret.push(_toQueryPair(key, values))
    }
  }
  return ret.join('&')
}

// 跳转相关
// function _doForward (opts) {
//   const url = opts.url
//   const ua = navigator.userAgent + ''
//   if (/android/ig.test(ua) && history.replaceState && (!/(http:|https:)/g.test(url) || url.indexOf(location.origin) != -1)) {
//     history.replaceState(null, document.title, url)
//     history.go(0)
//     if (navigator.userAgent.match(/QQBrowser/ig)) { // 处理qq浏览器不会刷新的bug
//       location.reload()
//     }
//   } else {
//     window.location.replace(url)
//   }
// }

// 目前支持的是app 内跳转
export const nav = {
  // to: function (options) {
  //   let {replace, ...opts} = options
  //   if (replace) {
  //     doForward(opts)
  //   } else {
  //     bow.navigator.forward(opts)
  //   }
  // },
  /**
   * bow文档地址：http://10.20.20.177/guide/component.html#aladdin-navigator-back-opts-cb
   * @param  {[type]} options [一般情况只要传url]
   * @return {[type]}         [description]
   */
  forward: function (options) {
    if (!options.url) {
      console.error('请检查你的跳转url是否存在')
      return
    }
    var router = config.router
    var routerhost = config.routerhost
    var env = ENV
    var url = ''
    var searchStr
    if (!router[options.url]) {
      console.error('conifg/url的配置中不存在' + options.url + '路由地址')
      return
    }
    url = router[options.url]
    // config/router的stg、prd开发环境
    if (process.env.NODE_ENV !== 'development') {
      if (options.env) {
        options.url = routerhost[env][options.env] + url
      } else {
        options.url = url
      }
    } else {
      // 开发环境
      if (options.env) {
        options.url = routerhost['development'][options.env] + url
      } else {
        options.url = url
      }
    }
    options = Object.assign({}, options)
    if (typeof options.type === 'string') {
      if (options.qs) {
        searchStr = _toQueryString(options.qs)
        options.url = options.url + '?' + searchStr
      }
      if (options.replace) {
        window.location.replace(options.url)
      } else {
        window.location.href = options.url
      }
    } else {
      bow.navigator.forward(options)
    }
  },
  /**
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  back: function (options) {
    if (typeof options !== 'number' && options instanceof Object) {
      bow.navigator.back(options)
    } else {
      var index = typeof options === 'undefined' ? -1 : options
      window.location.go(index)
    }
  }
}

// 存储相关
export const store = {
  localStorage: {
    setItem: function (options, cb) {
      aladdin.localStorage.setItem(options.key, options.value, true, '3DES', cb)
    },
    getItem: function (key, cb) {
      aladdin.localStorage.getItem(key, true, '3DES', cb)
    },
    removeItem: aladdin.localStorage.removeItem,
    clear: aladdin.localStorage.clear
  },
  sessionStorage: {
    setItem: aladdin.sessionStorage.setItem,
    getItem: aladdin.sessionStorage.getItem,
    removeItem: aladdin.sessionStorage.removeItem,
    clear: aladdin.sessionStorage.clear
  }
}

// 埋点
export const track = {
  record: function (options) {
    console.info(options)
    bow.talkingData.trackEvent({ eventId: options })
  }
}

// 事件
export const event = {
  on: function (event, cb) {
    bow.on && bow.on(event, cb)
  },
  off: function (event, cb) {
    bow.on && bow.off(event, cb)
  },
  once: function (event, cb) {
    bow.on && bow.once(event, cb)
  }
}

// 环境检测
export const env = {
  ...(aladdin.env || {})
    // 其它
}

export const toast = {
  /**
   * toast公共方法
   * @param  {[type]}   options  [position:显示位置（top|middle|bottom）, message:显示内容]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  show: function (options, callback) {
    let defalut = {
      message: '默认显示',
      position: 'bottom' // 默认显示下方
    }
    aladdin.toast.show(Object.assign({}, defalut, options), function (err) {
      if (err) {
        console.error(err.message || '调用失败')
      } else {
        callback && callback()
      }
    })
  }
}

export const dialog = {
  alert: function (options, callback) {
    let defalut = {
      title: '提示',
      message: '请写提示语',
      buttonText: '确认',
      buttonCallback: emptyFunction
    }
    aladdin.dialog.alert(Object.assign({}, defalut, options), function (err) {
      if (err) {
        console.error(err.message || '调用失败')
      } else {
        callback && callback()
      }
    })
  },
  confirm: function (options, callback) {
    let defalut = {
      title: '提示',
      message: '是否进行选择',
      leftButtonText: '取消',
      leftButtonCallback: emptyFunction,
      rightButtonText: '确定',
      rightButtonCallback: emptyFunction
    }
    aladdin.dialog.confirm(Object.assign({}, defalut, options), function (err) {
      if (err) {
        console.error(err.message || '调用失败')
      } else {
        callback && callback()
      }
    })
  }
}
