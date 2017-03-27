import * as types from '../types';
import { http } from '../../util/ald';
import api from '../../api/urls';
import  * as fit from '../../filters/deposit';

const state = {
    toast: {},

    //定活通
    orderDetail:{
        lists:{}
    },
    records:{
        lists:[]
    },
    withdraw:{
        data:{}
    },
    currentInterest:0,
    total: "",
    pageNumber:0,
    //0初始化，1加载中，2加载到最后一页
    loading:0,
    loadState:false,
    checkState:"加载更多",
    radioCheck:{},
    chineseNumWithdraw:"",
    protoShow : false,
    toAccountAmt : {
      accountAmt : "0.00",
      drawInterest: "0.00"
    }
    //conHeight : ""
};

// getters
const getters = {
    // 暂时不使用此项，这里是过滤过期的首发基金的
    // fundOnDate: state => {
    //     return state.shoufa.lists.filter(fund => {
    //         let funcEndDate = fund.saleEndDate;
    //         return new Date(funcEndDate.substring(0, 4), funcEndDate.substring(4, 6) - 1, funcEndDate.substring(6, 8)) > new Date();
    //     })
    // }
    // funcNavs: state => state.funcNavs
}

// actions
const actions = {
    getOrderDetail({ commit, state }, options){
        // console.log(options)
        http.request({
            method: 'POST',
            url: api.orderDetail,
            qs: {
              //bussType:"9110",
              depositNo:options.depositNo,
              amt:options.amt,
              bankCardSign:options.bankCardSign,
              businessType : options.businessType,
              orderType:options.orderType,
              pageIndex:options.pageIndex,
              pageSize:10,
              //brcpSessionTicket:options.brcpSessionTicket
            }
        }, function (res) {
            let result = res;
            if (result && result.responseCode == '000000') {
              //处理利率利息
              for(var i = 0;i<result.data.rateInfoList.length;i++){
                if(result.data.rateInfoList[i].type === "0"){
                  result.data.timeDueRate = result.data.rateInfoList[i].rateInfo.drawRate*100;
                  result.data.timeDueInterest = fit.formatMoneyNumber(result.data.rateInfoList[i].rateInfo.interest,"blur");
                }else if(result.data.rateInfoList[i].type === "1"){
                  result.data.TDueRate = result.data.rateInfoList[i].rateInfo.drawRate*100;
                  result.data.TDueInterest = fit.formatMoneyNumber(result.data.rateInfoList[i].rateInfo.interest,"blur");
                }else if(result.data.rateInfoList[i].type === "2"){
                  result.data.dueRate = result.data.rateInfoList[i].rateInfo.drawRate*100;
                  result.data.dueInterest = fit.formatMoneyNumber(result.data.rateInfoList[i].rateInfo.interest,"blur");
                }
              }
              //处理交易明细
              for(var i = 0; i<result.data.drawDetail.orders.length; i++){
                let item = result.data.drawDetail.orders[i];
                item.addMinus = item.businessType === "01"? "+" : "-";//存入+
                item.orderStatusCH = fit.orderStatusFun(item.tranStatus,item.businessType);
                item.orderTypeCH = fit.orderTypeFun(item.businessType);
                item.transAmt = fit.formatMoneyNumber(item.transAmt,"blur")
              }

              result.data.saveDeadLine = fit.year(result.data.saveDeadLine);
              result.data.currency = fit.monetaryUnit(result.data.currency);
              result.data.transAmtFort = fit.formatMoneyNumber(result.data.transAmt,"blur");
              result.data.transAmtCH = fit.chineseNum(result.data.transAmt);
              // console.log(result)
              //commit(types["CONHEIGHT"], "height:7rem");
              commit(types["RECORDS"], { recordList: result.data.drawDetail.orders,pageNum:options.pageNum,total:result.data.drawDetail.totalNum });
                result.data.lastFourNum = result.data.payeeAcctNo.substr(-4);
                //result.data.remainCapitalFormated = fit.formatMoneyNumber(result.data.remainCapital,"blur");
                // console.log(result)
                commit(types["ORDER_DETAIL"], { payload: result.data });
            } else {
              alert({
                title: res.responseMsg
              });
            }
        });
    },
    getRecords({ commit, state }, options){
        // console.log(options)
        http.request({
            method: 'POST',
            url: api.records,
            qs: {
            }
        }, function (res) {
            let result = res;

            if (result && result.responseCode == '000000') {

                if (result.data && typeof(result.data) == 'string') {
                    result.data = JSON.parse(result.data);
                }
                for(var i = 0; i<result.data.pageData.length; i++){
                    result.data.pageData[i].addMinus = result.data.pageData[i].orderType === "1.1"? "+" : "-";
                    result.data.pageData[i].orderStatus = fit.orderStatusFun(result.data.pageData[i].orderStatus);
                    result.data.pageData[i].orderType = fit.orderTypeFun(result.data.pageData[i].orderType);
                    if(result.data.pageData[i].dealStatus === "1"){
                        result.data.pageData[i].rightShow = "处理中";
                    }else if (result.data.pageData[i].dealStatus === "2"){
                        result.data.pageData[i].rightShow = result.data.pageData[i].orderStatus;
                    }else if (result.data.pageData[i].dealStatus === "3"){
                        result.data.pageData[i].rightShow = "处理失败";
                    }
                }
                // console.log(result)
                //commit(types["CONHEIGHT"], "height:7rem");
                commit(types["RECORDS"], { recordList: result.data,pageNum:options.pageNum,total:result.data.total });
                options.cb && options.cb();
            } else {
                commit(types.TOAST);
            }
        });
    },
    getWithdraw({ commit, state }, options){
        // console.log(options) amt=10000&bussType=9110&ccy=RMB&queryType=0&cardNo=6230582000070450773&bussType=9110
      // &ccy=RMB&depSerialNo=00001&queryType=0&ecifNo=&endDate=20170309
      // ¤tDay=20170307&isDepositFlag=1&startDate=20170307&terminalType=2&tranId=00001&currentDay=20170101
        http.request({
            method: 'POST',
            url: api.withdrawDeposit,
            qs: {
              amt:options.inputVal,
              cardNo:options.cardNo,
              currentDay:options.currentDay,
              depSerialNo:options.depSerialNo,
              endDate:options.endDate,
              isDepositFlag:"0",
              queryType:options.queryType,
              startDate:options.startDate,
              terminalType:"2",
              tranId:options.tranId,
              bussType:"9110",
              ecifNo:options.ecifNo,
              ccy:"RMB"
            }
        }, function (res) {
            let result = res;
            let radioData={};
            if (result && result.responseCode == '000000') {
                //result.data.lastFourNum = result.data.bankAcctNo.substr(-4);
              if(options.flag === "calc"){
                commit(types["WITHDRAWINTEREST"], {inputVal : options.inputVal,interest:result.data.interest} );
              }

                let protoShow = {};
                // console.log(result)
              if(options.queryType ==="0"){ //currentInterest
                result.data.currentRate = result.data.drawRate*100;
                commit(types["CURRENTINTEREST"], { payload: result.data.currentRate });
              }else if(options.queryType === "1"){
                if(result.data.isDrawFlag === "1"){
                  radioData.iconCh  =  false;
                  radioData.iconChed =  true;
                  radioData.tFlag = "t1";
                  protoShow.protoSh = true;
                  protoShow.placeCon = result.data.placeholderAmt = fit.formatMoneyNumber(result.data.leastAmt,"blur") + "元起";
                  //return {"icon-checked" : false, "icon-check" : true};
                }else{
                  radioData.iconCh  =  true;
                  radioData.iconChed =  false;
                  radioData.tFlag = "t0";
                  protoShow.protoSh = false;
                  protoShow.placeCon = result.data.placeholderAmt = "0.01元起";
                  //return {"icon-checked" : true, "icon-check" : false};
                }
                result.data.tRate = result.data.drawRate*100;
                commit(types["DHT_PROTOSHOW"], protoShow);
                commit(types["DHT_WITHDRAWNUM"], result.data.placeholderAmt);
                commit(types["RADIOCHECK"], { payload: radioData });
                commit(types["WITHDRAW"], { payload: result.data });
              }


            } else {
              alert({
                title: res.responseMsg
              });
            }
        });
    },
    getInterest({ commit, state }, options){
      // console.log(options)
      http.request({
        method: 'GET',
        url: api.withdrawInterest,
        qs: {
        }
      }, function (result) {
        if (result && result.responseCode == '000000') {


        } else {
          commit(types.TOAST);
        }
      });
    },
  creatOrder({ commit, state }, options){
    // console.log(options)
    http.request({
      method: 'GET',
      url: api.createOrder,
      qs: {
        prdType:"09",
        sourceAppId : "222222",
        transAmt:options.transAmt,
        transType:options.transType
      }
    }, function (result) {
      if (result && result.responseCode == '000000') {
        options.cb && options.cb(result.data);

      } else {
        alert({
          title: res.responseMsg
        });
      }
    });
  },
  getPaySearialNo({ commit, state }, options){
    // console.log(options)
    http.request({
      method: 'GET',
      url: api.getPaySearialNo,
      qs: {
        fundType :"09",
        orderAmount:options.orderAmount,
        orderNo:options.orderNo
      }
    }, function (result) {
      if (result && result.responseCode == '000000') {
        options.cb && options.cb(result.data);

      } else {
        alert({
          title: res.responseMsg
        });
      }
    });
  },
}

// mutations
const mutations = {
    [types.TOAST](state, { payload }) {
        state.toast = payload;
    },
    [types.RADIOCHECK](state, { payload }) {
        // console.log(payload)
        state.radioCheck = payload;
    },
    [types.ORDER_DETAIL](state, { payload }) {
        // console.log(payload)
        state.orderDetail.lists = payload;
    },
    //[types.CONHEIGHT](state,payload){
    //    state.conHeight = payload;
    //},
    [types.RECORDS](state, payload) {
        // console.log(payload)
        //state.records.lists = payload.orderRecords;
        if (payload.pageNum==1) {
            state.records.lists = payload.recordList;
        } else{
            state.records.lists = state.records.lists.concat(payload.recordList);
        }
        state.total = payload.total;
        state.loading = 0;
        if(payload.total == 0) {
            state.loadState = true;
        } else{
            state.loadState = false;
        }
        if (payload.pageNum*10>payload.total || payload.total<=10) {
            state.loading = 2;
            state.checkState = "已无更多数据";
        } else{
            state.checkState = "加载更多";
        }
    },
    ['DHT_RADIO'](state){
        state.radioCheck.iconCh = !state.radioCheck.iconCh;
        state.radioCheck.iconChed = !state.radioCheck.iconChed;
        if(state.radioCheck.tFlag ==="t0"){
            state.radioCheck.tFlag = "t1";
        }else{
            state.radioCheck.tFlag = "t0";
        }
    },
    [types.DHT_WITHDRAWNUM](state, payload){
        state.chineseNumWithdraw = payload;
    },
    [types.DHT_PROTOSHOW](state, payload){
        state.protoShow = payload;
    },
    ['DHT_PROTOSHOWAGAIN'](state,payload){
        state.protoShow.protoSh = payload;
        if(payload){
            state.protoShow.placeCon = fit.formatMoneyNumber(state.withdraw.data.leastAmt,"blur") + "元起";
        }else{
            state.protoShow.placeCon = "0.01元起";
        }
    },
    ['DHT_CHINESENUM'](state,payload){
        state.chineseNumWithdraw = payload;
    },
    [types.WITHDRAW](state, { payload }) {
        // console.log(payload)
        state.withdraw.data = Object.assign(state.withdraw.data,payload);
    },
    [types.CURRENTINTEREST](state,{payload}){
        state.currentInterest = payload;
    },
    [types.WITHDRAWINTEREST](state,payload){
      state.toAccountAmt.accountAmt =fit.formatMoneyNumber(Number(payload.inputVal) + Number(payload.interest),"blur");
      state.toAccountAmt.drawInterest = fit.formatMoneyNumber(payload.interest,"blur");
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
