/*
 * 现金宝转入-工具类函数
 */

/**
 * 将数字转化为大写汉字
 * @param num 待转换的数字
 * @param piece 转换的单位（默认为元）
 * @param nocomma 不要小数后的数字，默认为undefined(false)
 * @returns {string}
 */
export function chineseNum (num, piece, nocomma) {
  if (!piece) {
    piece = '元'
  }

  if (!/^\d*(\.\d*)?$/.test(num)) {
    return ''
  }
  var AA = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  var BB = ['', '拾', '佰', '仟', '萬', '億', '点', '']
  var a = ('' + num).replace(/(^0*)/g, '').split('.'), k = 0, re = ''
  for (var i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re
        break
      case 4:
        if (!new RegExp('0{4}\\d{' + (a[0].length - i - 1) + '}$').test(a[0])) { re = BB[4] + re }
        break
      case 8:
        re = BB[5] + re
        BB[7] = BB[5]
        k = 0
        break
    }
    if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) re = AA[0] + re
    if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re
    k++
  }

  if (!re) {
        // 前面为空，则统称零
    re = AA[0]
  }

  if (nocomma) {
    return re + (re ? piece : '')
  }

  if (a.length > 1 && a[1] && piece == '元') // 加上小数部分(如果有小数部分)
    {
        // 如果小数点前面没有值，说明没有元，不需要加上单位元
    if (re !== '')re += piece

    if (a[1].charAt(0) != '0' || (a[1].charAt(1) == '' ? '0' : a[1].charAt(1)) != '0') re += AA[a[1].charAt(0)] + '角'
    if (a[1].charAt(1) && a[1].charAt(1) != '0') re += AA[a[1].charAt(1)] + '分'
    return re
  } else if (a.length > 1 && a[1]) {
    if (a[1].charAt(0) != '0' || (a[1].charAt(1) == '' ? '0' : a[1].charAt(1)) != '0') re += (BB[6] + AA[a[1].charAt(0)])
    if (a[1].charAt(1) && a[1].charAt(1) != '0') re += AA[a[1].charAt(1)]
    if (re !== '')re += piece
    return re
  }

  return re + piece
}
export function transAipDate (value) {
  let date
  if (value && value.length == 8) {
    date = value.slice(4, 6) + '-' + value.slice(6, 8)
  } else {
    date = ''
  }
  return date
}
