import * as types from '../types';
import { http } from '../../util/ald';
import api from '../../api/urls';
import  * as fit from '../../filters/deposit';
// import {MessageBox} from 'pa-ui/lib/index';
import { MessageBox } from 'mint-ui'
import * as deposit_detail from '../../api/deposit_detail';

const state = {
    //定活通
    orderDetail:{
        lists:{}
    },
    records:{
        lists:[]
    },
    recordsFlag:true,
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
    },
    querySysFlag : "",
    sysFlag : ""
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
      let optionsReq = {
        url:"orderDetail",
        qs: {
          bussType:"9110",
          depSerialNo:options.depositNo,
          amt:options.amt,
          bankCardSign:options.bankCardSign,
          businessType : options.businessType,
          orderType:options.orderType,
          pageIndex:options.pageIndex,
          pageSize:5,
          appType:"003"
          //brcpSessionTicket:options.brcpSessionTicket
        }
      };

      http.fetch(optionsReq).then(result => {

        if (result.responseCode === '000000') {
          //处理利率利息
          result.data.TDueRate = "";
          if(result.data.rateInfoList){
            for(var i = 0;i<result.data.rateInfoList.length;i++){
              if(result.data.rateInfoList[i].type === "0"){
                if(result.data.rateInfoList[i].rateInfo){
                  result.data.timeDueRate = result.data.rateInfoList[i].rateInfo.drawRate;
                  result.data.timeDueInterest = fit.formatMoneyNumber(result.data.rateInfoList[i].rateInfo.interest,"blur");
                }

              }else if(result.data.rateInfoList[i].type === "1"){
                if(result.data.rateInfoList[i].rateInfo){
                  result.data.TDueRate = result.data.rateInfoList[i].rateInfo.drawRate;
                  result.data.TDueInterest = fit.formatMoneyNumber(result.data.rateInfoList[i].rateInfo.interest,"blur");
                }

              }else if(result.data.rateInfoList[i].type === "2"){
                if(result.data.rateInfoList[i].rateInfo){
                  result.data.dueRate = result.data.rateInfoList[i].rateInfo.drawRate;
                  result.data.dueInterest = fit.formatMoneyNumber(result.data.rateInfoList[i].rateInfo.interest,"blur");
                }
              }
            }
          }

          result.data.recordsFlag = true;
          //处理交易明细
          let querySystem = false, querySystemFlag = false;
          if(result.data.drawDetail){
            for(var i = 0; i<result.data.drawDetail.orders.length; i++){
              let item = result.data.drawDetail.orders[i];
              //前5条没有支取的话 不展示交易记录
              if(result.data.drawDetail.orders.length === 1 && item.businessType === "01"){
                result.data.recordsFlag = false;
              }

              item.addMinus = item.businessType === "01"? "+" : "-";//存入+
              item.orderStatusCH = fit.orderStatusFun(item.tranStatus,item.businessType);
              item.orderTypeCH = fit.orderTypeFun(item.businessType);
              item.transAmtFort = fit.formatMoneyNumber(item.transAmt,"blur");
              if(item.orderStatusCH === '处理中' && item.businessType === '03'){
                querySystem = true;
              }
            }
          }

          if(querySystem){
            if(result.data.drawDetail && result.data.drawDetail.totalNum>1){
              deposit_detail.default.getSystemDateTime({
                url:"getSystemDateTime",
                qs:{}
              },function(res){
                querySystemFlag = res >= 9 && res < 16? true : false;
                commit(types["QUERYSYSFLAG"], querySystemFlag);
              });
            }
          }

          result.data.expiryDateFort = result.data.expiryDate? `${result.data.expiryDate.substr(0,4)}-${result.data.expiryDate.substr(4,2)}-${result.data.expiryDate.substr(-2)}` :"";
          result.data.orderTimeFort = result.data.orderTime? result.data.orderTime.substr(0,10) :"";
          result.data.saveDeadLine = fit.year(result.data.saveDeadLine);
          result.data.currency = fit.monetaryUnit(result.data.currency);
          result.data.transAmtFort = fit.formatMoneyNumber(result.data.transAmt,"blur");
          result.data.transAmtCH = fit.chineseNum(result.data.transAmt);

          // console.log(result)
          //commit(types["CONHEIGHT"], "height:7rem");
          if(!result.data.drawDetail){
            result.data.drawDetail = {orders:[]};
          }
          commit(types["RECORDS"], { recordList: result.data.drawDetail.orders,pageIndex:options.pageIndex,total:result.data.drawDetail.totalNum });
          commit(types["ORDER_DETAIL"], { payload: result.data });
          result.data.lastFourNum = result.data.payeeAcctNo? result.data.payeeAcctNo.substr(-4): "";

        } else {
          MessageBox.alert({
            title: '温馨提示',
            message: result.responseMsg
          })
        }
      })
    },
    getRecords({ commit, state }, options){
        // console.log(options)
      let optionsReq = {
        url:"records",
        env:"stg3",
        qs:{
          bankCardSign: options.bankCardSign,
          businessType : "00",
          depSerialNo : options.depositNo,
          orderType: "02",
          pageIndex : options.pageIndex,
          pageSize : 10
        }
      };
      http.fetch(optionsReq).then(result => {
        if (result.responseCode === '000000') {
          let sys = false, sysFlag = false;
          for(var i = 0; i<result.data.orders.length; i++){
            let item = result.data.orders[i];
            //前5条没有支取的话 不展示交易记录
            item.addMinus = item.businessType === "01"? "+" : "-";//存入+
            item.orderStatusCH = fit.orderStatusFun(item.tranStatus,item.businessType);
            item.orderTypeCH = fit.orderTypeFun(item.businessType);
            item.transAmtFort = fit.formatMoneyNumber(item.transAmt,"blur");
            if(item.orderStatusCH === '处理中' && item.businessType === '03'){
              sys = true;
            }
          }
          if(sys){
            if(result.data.drawDetail && result.data.drawDetail.totalNum>1){
              deposit_detail.default.getSystemDateTime({
                url:"getSystemDateTime",
                qs:{}
              },function(res){
                sysFlag = res >= 9 && res < 16? true : false;
                commit(types["SYSFLAG"], sysFlag);
              });
            }
          }


          // console.log(result)
          //commit(types["CONHEIGHT"], "height:7rem");
          commit(types["RECORDS"], { recordList: result.data.orders,pageIndex:options.pageIndex,total:result.data.totalNum });
          options.cb && options.cb();
        } else {
          MessageBox.alert({
            title: '温馨提示',
            message: result.responseMsg
          })
        }
      })

    },
    getWithdraw({ commit, state }, options){
       let optionsReq = {
        url:"withdrawDeposit",
        qs:{
          amt:options.inputVal,
          bankCardSign:options.bankCardSign,
          currentDay:options.currentDay,
          depSerialNo:options.depSerialNo,
          isDepositFlag:"0",
          queryType:options.queryType,
          appType:"003",
          bussType:"9110",
          ccy:"RMB",
          param:"sunqin"
        }
      };
      http.fetch(optionsReq).then(result => {
        if (result.responseCode === '000000') {
          let protoShow = {};
          let radioData = {};
          result.data.isDrawFlagFinal = false;
            result.data.currentRate = result.data.preDrawInfos[0].drawRate ? result.data.preDrawInfos[0].drawRate : "";
            commit(types["CURRENTINTEREST"], { payload: result.data.currentRate });
            let tempWork = result.data.preDrawInfos[1].nextWorkDay;
            result.data.nextWorkDayFort = tempWork? `${tempWork.substr(0,4)}-${tempWork.substr(4,2)}-${tempWork.substr(-2)}` : "";

            if(result.data.preDrawInfos[1].isDrawFlag === "1"){
              result.data.isDrawFlagFinal = true;
            }
            if(result.data.isDrawFlagFinal){
              radioData.iconCh  =  false;
              radioData.iconChed =  true;
              radioData.tFlag = "t1";
              protoShow.protoSh = true;
              protoShow.placeCon = result.data.placeholderAmt = fit.formatMoneyNumber(result.data.preDrawInfos[1].depositAmtMin,"blur") + "元起";
              //return {"icon-checked" : false, "icon-check" : true};
            }else{
              radioData.iconCh  =  true;
              radioData.iconChed =  false;
              radioData.tFlag = "t0";
              protoShow.protoSh = false;
              protoShow.placeCon = result.data.placeholderAmt = "0.01元起";
              //t+1提示语
              // 90天 是否t1过判断
              if(result.data.preDrawInfos[1].isDrawFlag !== "1"){
                result.data.t1Content = fit.disableWithdraw(result.data.preDrawInfos[1].isDrawFlag);
              }
              //return {"icon-checked" : true, "icon-check" : false};
            }
            result.data.tRate = result.data.preDrawInfos[1].drawRate? result.data.preDrawInfos[1].drawRate : "";
            if(options.flag !== "calc"){
              commit(types["RADIOCHECK"], { payload: radioData });
              commit(types["DHT_WITHDRAWNUM"], "");
              commit(types["DHT_PROTOSHOW"], protoShow);
              commit(types["WITHDRAW"], { payload: result.data });
            }

        } else {
          let radioData = {iconCh:true,iconChed:false};
          let protoShow={};
          protoShow.protoSh = false;
          protoShow.placeCon = "0.01元起";
          commit(types["RADIOCHECK"], { payload: radioData });
          commit(types["DHT_PROTOSHOW"], protoShow);
          MessageBox.alert({
            title: '温馨提示',
            message: result.responseMsg
          })
        }
      })
    },
  queryDraw({commit,state},options){
    let optionsReq = {
      url:"queryDraw",
      qs:{
        amt:options.inputVal,
        bankCardSign:options.bankCardSign,
        depSerialNo:options.depSerialNo,
        isDepositFlag:"0",
        queryType:options.queryType,
        appType:"003",
        bussType:"9110",
        ccy:"RMB",
        transDate:options.transDate,
        param:"sunqin"
      }
    };
    http.fetch(optionsReq).then(result => {
      if (result.responseCode === '000000') {
        let interestRes = '';
        if(options.queryType === "0"){
          interestRes = result.data.interest;
        }else if(options.queryType === "1"){
          interestRes = result.data.interest;
        }
        commit(types["WITHDRAWINTEREST"], {inputVal : options.inputVal,interest:interestRes} );
      } else {
        MessageBox.alert({
          title: '温馨提示',
          message: result.responseMsg
        })
      }
    })
  },
  canDraw({commit,state},options){
    let optionsReq = {
      url:"canDraw",
      qs:{
        amt:options.inputVal,
        bankCardSign:options.bankCardSign,
        currentDay:options.currentDay,
        depSerialNo:options.depSerialNo,
        isDepositFlag:"0",
        queryType:options.queryType,
        appType:"003",
        bussType:"9110",
        ccy:"RMB",
        param:"sunqin"
      }
    };
    http.fetch(optionsReq).then(result => {
      if (result.responseCode === '000000') {
        options.cb && options.cb(result.data);
      } else {
        MessageBox.alert({
          title: '温馨提示',
          message: result.responseMsg
        })
      }
    })
  },
    creatOrder({ commit, state }, options){
      let optionsReq = {
        url:"createOrder",
        env:"stg3",
        qs:{
          prdType:"09",
          transAmt:options.transAmt,
          transType:options.transType,
          bankCardSign:options.bankCardSign,
          depositNo : options.depositSerialNo,
          terminalType:"003",
          appType:"003",
          valueDate:options.valueDate
        }
      };
      http.fetch(optionsReq).then(result => {
        if (result.responseCode === '000000') {
          options.cb && options.cb(result.data);
        } else {
          MessageBox.alert({
            title: '温馨提示',
            message: result.responseMsg
          })
        }
      })
    },
    getPaySearialNo({ commit, state }, options){
      // console.log(options)
      let optionsReq = {
        url:"getPaySearialNo",
        env:"stg3",
        qs:{
          fundType :"09",
          orderAmount:options.orderAmount,
          orderNo:options.orderNo,
          bankCardSign : options.bankCardSign
        }
      };
      http.fetch(optionsReq).then(result => {
        if (result.responseCode === '000000') {
          options.cb && options.cb(result.data);
        } else {
          MessageBox.alert({
            title: '温馨提示',
            message: result.responseMsg
          })
        }
      })
    }
}

// mutations
const mutations = {
    [types.RADIOCHECK](state, { payload }) {
        // console.log(payload)
        state.radioCheck = payload;
    },
    [types.ORDER_DETAIL](state, { payload }) {
        // console.log(payload)
        state.orderDetail.lists = payload;
        state.recordsFlag = payload.recordsFlag;
    },
    [types.QUERYSYSFLAG](state,payload){
        state.querySysFlag = payload;
    },
    [types.SYSFLAG](state,payload){
        state.sysFlag = payload;
    },
    [types.RECORDS](state, payload) {
        // console.log(payload)
        //state.records.lists = payload.orderRecords;
        if (payload.pageIndex==1) {
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
        if (payload.pageIndex*10>payload.total || payload.total<=10) {
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
            state.protoShow.placeCon = fit.formatMoneyNumber(state.withdraw.data.preDrawInfos[1].depositAmtMin,"blur") + "元起";
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
