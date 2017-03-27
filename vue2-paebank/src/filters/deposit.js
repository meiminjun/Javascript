/**
 * 数字千分位
 * @param moneyNum 待转换的数字
 * @param type     传 blur 时  是失去焦点给输入框中的值加千分位  否则  是获得焦点去掉千分位
 * @returns {''}
 */
export function formatMoneyNumber (moneyNum, type) {
  if (type === 'blur') {
    let result = isNaN((1 * moneyNum).toFixed(2)) ? (new Number(0).toFixed(2)) : (1 * moneyNum).toFixed(2)
    return /\./.test(result) ? result.replace(/(\d{1,3})(?=(\d{3})+\.)/g, '$1,') : result.replace(/(\d{1,3})(?=(\d{3})+\b)/g, '$1,')
  } else {
    moneyNum = isNaN((1 * moneyNum).toFixed(4)) ? (new Number(1).toFixed(4)) : (1 * moneyNum).toFixed(4)
    return 1 * (('' + moneyNum).replace(/0+$/, ''))
  }
}

/**
 * 将数字转化为大写汉字
 * @param n 待转换的数字
 * @returns {string}
 */
export function chineseNum (n) {
  if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) {
      // 数据非法
    return ''
  }
  var unit = '千百拾亿千百拾万千百拾元角分', str = ''
  n += '00'
  var p = n.indexOf('.')
  if (p >= 0) {
    n = n.substring(0, p) + n.substr(p + 1, 2)
  }
  unit = unit.substr(unit.length - n.length)
  for (var i = 0; i < n.length; i++) {
    str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i)
  }
  return str.replace(/零(千|百|拾|角)/g, '零').replace(/(零)+/g, '零').replace(/零(万|亿|元)/g, '$1').replace(/(亿)万|壹(拾)/g, '$1$2').replace(/^元零?|零分/g, '').replace(/元$/g, '元整')
}

export function orderTypeFun (code) {
  switch (code) {
    case '01':
      return '存入'
    case '02':
      return '实时支取'
    case '03':
      return 'T+1到账支取'
    case '04':
      return 'T+1支取撤销'
    default:
      return code
  }
}

export function disableWithdraw (code) {
  switch (code) {
    case '2':
    case '3':
    case '4':
      return '存款满90天后，交易日9:00-16:00可用'
    case '5':
      return '系统T+1到账支取总额度已用完,请您改用实时支取方式。'
    case '6':
      return '同一天只能提交一笔T+1到账支取'
    default:
      return code
  }
}

export function orderStatusFun (code, type) {
  switch (code) {
    case '00':
      return '初始状态'
    case '01':
    case '05':
      return '处理中'
    case '02':
      if (type === '01') {
        return '存入成功'
      } else {
        return '支取成功'
      }
    case '03':
      if (type === '01') {
        return '存入失败'
      } else {
        return '支取失败'
      }
    case '04':
      return '交易撤销'
    case '06':
      return '不确定'
    default:
      return code
  }
}

/**
 * 货币单位转换
 * @param n 待转换的数据
 * @returns {string}
 */

export function monetaryUnit (n) {
  switch (n) {
    case 'RMB': {
      return '人民币'
    }
  }
}

/**
 * 年限单位转化
 * @param n 待转换的数据
 * @returns {string}
 */

export function year (n) {
  if (/Y/.test(n)) {
    return n.replace(/Y/, '年')
  } else if (/M/.test(n)) {
    return n.replace(/M/, '月')
  } else if (/D/.test(n)) {
    return n.replace(/D/, '天')
  }
}

export function clearNoNum (value) {
  // 输入框只能输入数字和小数点  并且只能输入小数两位
  value = value.replace(/[^\d.]/g, '').replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
    .replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3')
  return value
}

export function getCountDays (n) {
  var curDate = new Date()
  /* 获取当前月份 */
  var curMonth = curDate.getMonth()
  /*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
  curDate.setMonth(curMonth + 1)
  /* 将日期设置为0, 这里为什么要这样设置, 我不知道原因, 这是从网上学来的 */
  curDate.setDate(0)
  /* 返回当月的天数 */
  // var t =  curDate.getDate();
  var t = 40
  // var ti =  40;
  var m = new Date(new Date().getTime() - (3600 * 24 * 1000 * t) + ((3600 * 24 * 1000 * t) / 4) * n).getMonth() + 1
  var d = new Date(new Date().getTime() - (3600 * 24 * 1000 * t) + ((3600 * 24 * 1000 * t) / 4) * n).getDate()
  m = m < 10 ? '0' + m : m
  d = d < 10 ? '0' + d : d
  return (m + '.' + d)
}

export function time (t) {
  return Date.parse(new Date(t.substr(0, 4) + '-' + t.substr(4, 2) + '-' + t.substr(6, 2)))
}

export function timestampDay (n) {
  return Date.parse(new Date(new Date().getTime() - (3600 * 24 * 1000 * 40) + ((3600 * 24 * 1000 * 40) / 4) * n))
}
// export function getCountDay(n) {
//  var curDate = new Date();
//  /* 获取当前月份 */
//  var curMonth = curDate.getMonth();
//  /*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
//  curDate.setMonth(curMonth + 1);
//  /* 将日期设置为0, 这里为什么要这样设置, 我不知道原因, 这是从网上学来的 */
//  curDate.setDate(0);
//  /* 返回当月的天数 */
//  var t =  curDate.getDate();
//  return new Date(new Date().getTime()-(3600*24*1000*t)+((3600*24*1000*t)/4)*n)
// }
