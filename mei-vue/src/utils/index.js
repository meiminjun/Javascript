// 所有日期方法集合
export const date = {
  /**
   * 格式化日
   * @param {String| Date} date : 原始日期信息
   * @param {String} format : 格式化样式。 可选，默认为"yyyy-MM-dd hh:mm:ss"
   * @return 格式化结果
   * @例: formatDate("20130112"), //"2013-01-12 00:00:00"
   *     formatDate("20130112", "yyyy*MM*dd hh:mm:ss"), //"2013*01*12 00:00:00"
   */
  formatDate (date, format) {
    var arr = ''
    if (!date || date === '0' || date === 0) {
      return ''
    }
    if (!format) {
      format = 'yyyy-MM-dd hh:mm:ss'
    }
    if (typeof date === 'string') {
      if (date.length === 8) {
        arr = [date.substr(0, 4), date.substr(4, 2), date.substr(6, 2)]
      } else if (date.length === 14) {
        arr = [date.substr(0, 4), date.substr(4, 2), date.substr(6, 2), date.substr(8, 2), date.substr(10, 2), date.substr(12, 2)]
      } else {
        arr = date.split(/[^0-9]+/)
      }
      format = format.replace(/([a-z])\1+/ig, function (all, $1) {
        var result = {
          y: ~~arr[0],
          M: ~~arr[1],
          d: ~~arr[2],
          h: ~~arr[3],
          m: ~~arr[4],
          s: ~~arr[5]
        }[$1]
        if (result !== undefined && result < 10) {
          result = '0' + result
        }
        return result || ''
      })
      return format
    }
    format = format.replace(/([a-z])\1+/ig, function (all) {
      var first = all.charAt(0)
      if ('y M d h m s'.indexOf(first) >= 0) {
        if (first === 'y') {
          return all.length > 2 ? date.getFullYear() : (date.getFullYear() + '').substr(2)
        }
        var result = {
          M: date.getMonth() + 1,
          d: date.getDate(),
          h: date.getHours(),
          m: date.getMinutes(),
          s: date.getSeconds()
        }[first]
        result !== undefined && result < 10 && (result = '0' + result)
        return result
      } else {
        return all
      }
    })
    return format
  }
}
