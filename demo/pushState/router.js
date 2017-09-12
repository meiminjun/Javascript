(function IIFE (def) {
  window.Router = def(window)
  window.Router.init()
})(function def (global) {
  var _isObject = function (obj) {
    var type = typeof obj
    return type === 'function' || type === 'object' && !!obj
  }
  var json = { time: new Date().getTime() }
  var routes = {}

  function _route (path, templateId, data) {
    routes[path] = {templateId: templateId, data: data}
    window.sessionStorage.setItem('__Router__', routes)
  }
  return {
    init: function () {
      var __Router__ = window.sessionStorage.getItem('__Router__')
      if (__Router__) {
        routes = __Router__
      }
      window.onpopstate = function (event) {
        window.alert('location: ' + document.location + ', state: ' + JSON.stringify(event.state))
      }
    },
    to: function (option) {
      if (!_isObject(option) && option.url) {
        return
      }
      _route(option.url, option)
      if (window.history && (window.history.pushState && window.history.replaceState)) {
        if (!option.replace) {
          window.history.pushState(json, '', option.url + '?page=1')
        } else {
          window.history.replaceState(json, '', option.url + '?page=1')
        }
      } else {
        window.location.href = option.url
      }
    },
    back: function (option) {
      if (!_isObject(option) && option.url) {
        return
      }
      if (window.history && (window.history.pushState && window.history.replaceState)) {
        if (!option.replace) {
          window.history.pushState(json, '', url + '?page=1')
        } else {
          window.history.replaceState(json, '', url + '?page=1')
        }
      } else {
        window.history.go(-1)
      }
      // if (typeof option === 'undefined') {
      //   window.history.go(-1)
      // } else {
      //   if (window.history && window.history.replaceState && option.replace) {
      //     window.history.replaceState({page: 1}, '存款页面', option.url + '?page=1')
      //   } else if (option.replace) {
      //     window.location.replace(option.url)
      //   }
      //   window.history.go(-1)
      // }
    }
  }
})
