/**
 * 作者: bullub
 * 日期: 2016/12/19 17:02
 * 用途:
 */
'use strict';
(function (global, nav) {
  var getCurrentScript = function () {
    if (document.currentScript) {
      return document.currentScript.src
    } else {
      var scripts = document.getElementsByTagName('script')
      return scripts[scripts.length - 1].src
    }
  }

  var src = getCurrentScript()

  var currentScriptBase = src.substring(0, src.lastIndexOf('/')) + '/'

    // 与运行时环境有关系的库文件
  var deps = [
    'zepto.js'
  ]
  var depscripts = ''

  for (var i = 0, len = deps.length; i < len; i++) {
    depscripts += '<script src="' + currentScriptBase + deps[i] + '"></script>\n'
  }

  document.write(depscripts)
}(window, navigator))
