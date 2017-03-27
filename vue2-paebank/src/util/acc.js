import aladdin from 'aladdin'
import config from '../../config'
import bow from 'bow'
import api from '../api/urls'
import * as ald from './ald'

const ua = navigator.userAgent + ''

// 291001～291007
export function getForwardUrl () {
  let prefix = '', search = '', hash = '', param = '', ohash = '', returnUrl = ''
  let url = location.href
  let urls = url.split('#')
  url = urls[0]
  hash = urls[1] ? urls[1] : ''
  url = url.split('?')
  search = url[1] ? url[1] : ''
  prefix = url[0]
  if (hash) {
    hash = hash.split('?')
    ohash = hash[0]
    param = hash[1] ? hash[1] : ''
  }
    // returnUrl = prefix+(search?'&'+search:'')+(param?'&'+param:'')+ohash;
  if (search) {
    search = '?' + search
    if (param) {
      param = '&' + param
    }
  } else {
    if (param) {
      param = '?' + param
    }
  }
  returnUrl = prefix + search + param + '#' + ohash
// 之前的登录
/*  let forwardUrl = 'https://bank-static-stg.pingan.com.cn/pobing/index.html#/onelogin';
  forwardUrl = forwardUrl.split('#')
  return forwardUrl[0] + '?returnURL=' + encodeURIComponent(returnUrl) + (forwardUrl[1] ? '#' + forwardUrl[1] : '')*/

// 只做登录
// https://bank-static-stg.pingan.com.cn/omm/mobile/login.html?backUrl=你想要跳回的地址(需要encodeURIComponent)
// 需要验证是否需要绑定一账通
// https://bank-static-stg.pingan.com.cn/omm/mobile/login.html?optCode=0010&backUrl=你想要跳回的地址(需要encodeURIComponent)
// 需要验证账户是否异常
// https://bank-static-stg.pingan.com.cn/omm/mobile/login.html?optCode=0100&backUrl=你想要跳回的地址(需要encodeURIComponent)
// 既需要验证是否绑定一账通，还验证账户是否异常
// https://bank-static-stg.pingan.com.cn/omm/mobile/login.html?optCode=0110&backUrl=你想要跳回的地址(需要encodeURIComponent)
  let forwardUrl = 'https://bank-static-stg.pingan.com.cn/omm/mobile/login.html'
  forwardUrl = forwardUrl.split('#')
  return forwardUrl[0] + '?optCode=0110&backUrl=' + encodeURIComponent(returnUrl) + (forwardUrl[1] ? '#' + forwardUrl[1] : '')
}

// 检测是否需要replace跳转
const replaceList = ['pay.html', 'index.html']
export function checkReplace () {
  let p = location.pathname
  let a
  if (p.length > 1) {
    a = p.substr(p.lastIndexOf('/') + 1, p.length - 1)
    if (replaceList.indexOf(a) != -1) {
      return true
    }
    return false
  } else {
    return false
  }
}

// 检测是否登录，此方法不能
export function checkLogin (cb) {
  let isLogin = false
  let cookies = bow.http.getCookie(location.host, 'OMM', function (err, cookie) {
    if (err) {
      isLogin = false
    } else {
      islogin = true
    }
    if (typeof (cb) === 'function') {
      cb(cookie)
    } else {
      cb(isLogin)
    }
  })
}

// 登录
// App内？
// 是否登录
// 未登录弹出native登录

// App外？
// 是否有cookie or statusCode == 291001?
// 跑#/onelogin
export function tryLogin () {
  if (ua.indexOf('AladdinHybrid') != -1) {
    bow.auth.synLogout(function (err) {
      if (err) {
        console.error('登出异常！')
        return
      }
      console.info('登出成功！')
      bow.auth.launchLogin()
    })
  } else {
    if (checkReplace()) {
      location.replace(getForwardUrl())
    } else {
      console.log(getForwardUrl())
      location.href = getForwardUrl()
      // ald.nav.forward({ url: 'login', env: 'login' })
            // ald.navigator.forwardTo({title:'登录',url:getForwardUrl()});
    }
  }
}

// 检测处理邦卡
export function checkCard () {
    //
}

// 检测身份验证
export function checkAuth () {
    //
}
