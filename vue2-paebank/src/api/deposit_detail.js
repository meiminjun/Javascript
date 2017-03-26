import * as ald from '../util/ald';
import api from './urls';

export default {

    getAipRecommend(options, cb){
        ald.http.request({
            method: 'GET',
            url: api.queryFixedCurrentLinkList,
            qs: options
        }, function (res) {
            cb(res.data);
        });

    },
    getCreateOrder(options, cb){
        ald.http.request({
            method: 'GET',
            url: api.queryDrawHistory,
            qs: options
        }, function (res) {
            cb(res.responseBody);
        });

    },
    createOrder(options, cb){
        ald.http.request({
            method: 'GET',
            url: api.createOrder,
            qs: options
        }, function (res) {
          if(res.responseCode === "000000"){
            cb(res.data);
          }else{
            alert("请求出错");
          }

        });

    },
  queryOrderStatus(options, cb){
      ald.http.request({
        method: 'POST',
        url: api.queryOrderStatus,
        qs: options
      }, function (res) {
        if(res.responseCode === "000000"){
          cb(res.data);
        }else{
          alert("请求出错");
        }

      });

    }
}
