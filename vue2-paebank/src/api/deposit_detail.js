import * as ald from '../util/ald';
import api from './urls';
import {PecMessageBox} from 'pa-ui/lib/index';

export default {
  //定活通详情查询
  getAipRecommend(options, cb){
    ald.http.fetch(options).then(res => {
      if (res.responseCode === '000000') {
        cb(res.data)
      } else {
        PecMessageBox.alert({
          title: '温馨提示',
          message: res.responseMsg
        })
      }
    });
  },
  //定活通历史支取利率
  getCreateOrder(options, cb){
    ald.http.fetch(options).then(res => {
      if (res.responseCode === '000000') {
        cb(res.data)
      } else {
        PecMessageBox.alert({
          title: '温馨提示',
          message: res.responseMsg
        })
      }
    });
  },
  queryDrawHistory(options, cb){
    ald.http.fetch(options).then(res => {
      if (res.responseCode === '000000') {
        cb(res.data)
      } else {
        PecMessageBox.alert({
          title: '温馨提示',
          message: res.responseMsg
        })
      }
    });
  },
  //定活通创建订单
  createOrder(options, cb){
    ald.http.fetch(options).then(res => {
      if (res.responseCode === '000000') {
        cb(res.data)
      } else {
        PecMessageBox.alert({
          title: '温馨提示',
          message: res.responseMsg
        })
      }
    });
  },
  //定活通查询子订单
  queryOrderStatus(options, cb){
    ald.http.fetch(options).then(res => {
      cb(res)
    });
  },
  //定活通查询到期利息
  queryIntRate(options, cb){
    ald.http.fetch(options).then(res => {
      if (res.responseCode === '000000') {
        cb(res.data)
      } else {
        PecMessageBox.alert({
          title: '温馨提示',
          message: res.responseMsg
        })
      }
    });
  },
  getSystemDateTime(options, cb){
    ald.http.fetch(options).then(res => {
      if (res.code === '000000') {
        cb(new Date(res.data.current_date_time).getHours(),res.data.current_date_time)
      } else {
        PecMessageBox.alert({
          title: '温馨提示',
          message: res.msg
        })
      }
    });
  },
  dhtQueryCardList(options, cb){
    ald.http.fetch(options).then(res => {
      if (res.responseCode === '000000') {
        cb(res.data)
      } else {
        PecMessageBox.alert({
          title: '温馨提示',
          message: res.responseMsg
        })
      }
    });
  }
}
