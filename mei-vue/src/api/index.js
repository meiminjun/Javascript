import * as ald from 'utils/ald'
import { MessageBox } from 'mint-ui'

export default {
  /**
   * 定活通详情查询
   * @param  {[type]}   options [description]
   * @param  {Function} cb      [description]
   * @return {[type]}           [description]
   */
  getAipRecommend (options, cb) {
    ald.http.fetch(options).then(res => {
      if (res.responseCode === '000000') {
        cb(res.data)
      } else {
        MessageBox.alert({
          title: '温馨提示',
          message: res.responseMsg
        })
      }
    })
  },
  /**
   * 定活通历史支取利率
   * @param  {[type]}   options [description]
   * @param  {Function} cb      [description]
   * @return {[type]}           [description]
   */
  getCreateOrder (options, cb) {
    ald.http.fetch(options).then(res => {
      if (res.responseCode === '000000') {
        cb(res.data)
      } else {
        MessageBox.alert({
          title: '温馨提示',
          message: res.responseMsg
        })
      }
    })
  },
  queryDrawHistory (options, cb) {
    ald.http.fetch(options).then(res => {
      if (res.responseCode === '000000') {
        cb(res.data)
      } else {
        MessageBox.alert({
          title: '温馨提示',
          message: res.responseMsg
        })
      }
    })
  }
}
