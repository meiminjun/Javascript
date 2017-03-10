import financeService from '../../api/deposit_detail';
import * as types from '../types';
import api from '../../api/urls.js';
import * as fit from '../../filters/deposit';

const state = {
    //定投列表
    aipFund: {
        lists: []
    },
    history:{
        lists:[]
    }
};

// actions
const actions = {
    getAipRecommend({ commit }, params = {}){
        financeService.getAipRecommend({
            productClass:'1',
            ...params
        }, function (data) {
            commit(types.DEPOSIT_DETAIL, { lists:data.productList[0],pageNum:"1"});
        });
    },
  queryOrderStatus({ commit }, params = {}){
        financeService.queryOrderStatus({
          signCardNo: '6230582000070450773',
          subTradeOrderNo: '20170308120426100000000',
            ...params
        }, function (data) {
            commit(types.DEPOSIT_BUY, { lists:data});
        });
    }
};

// mutations
const mutations = {
    //定活通详情
    [types.DEPOSIT_DETAIL](state, payload){
        state.aipFund.lists = payload.lists
        state.aipFund.lists.ccy = fit.monetaryUnit(state.aipFund.lists.ccy);
        state.aipFund.lists.saveDeadline = fit.year(state.aipFund.lists.saveDeadline);
        state.aipFund.lists.interestRate = Number(state.aipFund.lists.interestRate).toFixed(3)+'%';
    },
    //定活通存入
    [types.DEPOSIT_BUY](state, payload){
      state.history.lists = payload.lists
    }
};

export default {
    state,
    actions,
    mutations
}
