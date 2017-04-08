import * as types from '../types';
import { http } from '../../util/ald';
// import api from '../../api/urls';
// import {PecMessageBox} from 'pa-ui/lib/index';
import { MessageBox } from 'mint-ui'

const state = {
  toast: {},
  //定活通
  orderDetail:{
    lists:[]
  },
  records:{
    lists:[]
  },
  withdraw:{
    data:{}
  },
  //我的定活通列表
  myliveDead:{
    lists:[],
  },

  nomyliveDead:false,
  //卡列表
  mycard:{
    lists:[]
  },
  //我的定活通列表数组
  showlist:{

  },
  changecard:"",
  total: "",
  pageNumber:0,
  //0初始化，1加载中，2加载到最后一页
  loading:0,
  loadState:false,
  checkState:"加载更多",
  nocard:false
};

// getters
const getters = {

};
// actions
const actions = {
//请求我的定活通列表
  getMyliveDead({ commit, state }, options){
    return new Promise((resolve,reject) => {
    // console.log(options)
    let optionsReq = {
      url:"queryDHBHold",
      env:"stg3",
      qs:{
        bankCardSign:options.bankCardSign,
        currentPgs:options.currentPgs,
        pageSize:options.pageSize
      }
    };
    http.fetch(optionsReq).then(res => {
      if (res.responseCode === '000000') {
        if(res.data.holdNum!=0){
          commit(types["MYLIVE_DEAD"], { show_list: res.data ,currentPgs:options.currentPgs,holdNum:res.data.holdNum});
          commit(types["MYTOTAL"], {payload: res.data});
          resolve({showlive:false,cardshow:false,data:res.data,No:options.cardNo});
        }else {
          // commit(types["NOMYLIVE_DEAD"],{payload: res.data})
          resolve({showlive:true,cardshow:true});

        }
        options.cb && options.cb();
      } else {
        MessageBox.alert({
          title: '温馨提示',
          message: res.responseMsg
        })
      }
    })
    });
  },

  //请求卡列表
  getMyliveCards({ commit, state }, options){
    return new Promise((resolve,reject) => {
    // console.log(options)
    let optionsReq = {
      url:"dhtQueryCardList",
      env:"stg3",
      qs:{
      }
    };
    http.fetch(optionsReq).then(res => {
      if (res.responseCode === '000000') {
        if(res.data.length==0){
          resolve({data:res.data,car_id:true});
        }else{
          for(var i=0; i<res.data.length; i++){
            if(res.data[i].cardType=="1"){
              res.data[i].bankName=res.data[i].bankName+"储蓄卡"
            }else if(res.data[i].cardType=="3"){
              res.data[i].bankName=res.data[i].bankName+"互联网账户"
            }
          }
          commit(types["MYCARDS"], { payload: res.data });
          resolve({data:res.data,fa_id:true}); // 成功回调
        }
        options.cb && options.cb();
      } else {
        MessageBox.alert({
          title: '温馨提示',
          message: res.responseMsg
        })
      }
    })
    });
  },
};
// mutations
const mutations = {
  [types.NOCARD](state,{}) {
    state.nocard = true;
  },
  [types.NOMYLIVE_DEAD](state,{payload}) {
    state.nomyliveDead = true;
  },


  [types.TOAST](state, { payload }) {
    state.toast = payload;
  },
  [types.C0012_INV_FUND_HOTSALE_FUND](state, { payload }) {
    // console.log(payload)
    state.youxuan.lists = payload.recommendPrdList;
  },
  [types.ORDER_DETAIL](state, { payload }) {
    // console.log(payload)
    state.orderDetail.lists = payload;
  },
  [types.MYCARDS](state, { payload }) {
    // console.log(payload)
    state.mycard.lists = payload;
  },
  [types.CARDFIRST](state, { payload }) {
    // console.log(payload)
    state.changecard = payload;
  },

  [types.MYTOTAL](state,  payload ) {

    state.showlist = payload.payload;
  },
    [types.MYLIVE_DEAD](state, payload) {
      //state.records.lists = payload.orderRecords;
      if (payload.currentPgs==1) {
        state.myliveDead.lists = payload.show_list.tranListArray[0].acctArray;
      } else{
        state.myliveDead.lists = state.myliveDead.lists.concat(payload.show_list.tranListArray[0].acctArray);
      }
    },
  ['DHT_LOADING_STATE'](state){
    state.loading=1;
  },
  ['DHT_CHANGECARDSHOW'](state,payload){
    state.changecard = payload;
  },
  ['DHTWW_CHANGECARDSHOW'](state,payload){
    state.changecard = payload;
  },

  [types.WITHDRAW](state, { payload }) {
    // console.log(payload)
    state.withdraw.data = payload;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
