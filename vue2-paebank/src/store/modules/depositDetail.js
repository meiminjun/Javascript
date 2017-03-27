import financeService from '../../api/deposit_detail';
import * as types from '../types';
import api from '../../api/urls.js';
import * as fit from '../../filters/deposit';

const state = {
  //定投列表
  aipFund: {
    lists: []
  },
  history: {
    lists: [],
    real:[]
  }
};

// actions
const actions = {
  getAipRecommend({ commit }, params = {}){
    financeService.getAipRecommend({
      url: 'queryFixedCurrentLinkList',
      //env: 'default',
      productClass: '1',
      ...params
    }, function (data) {
      commit(types.DEPOSIT_DETAIL, {lists: data.productList[0], pageNum: "1"});
    });
  },
  getCreateOrder({ commit }, params = {}){
    financeService.getCreateOrder({
      url: 'queryDrawHistory',
      qs: {
        businessType: '01',
        ccy: 'RMB',
        productType: '1',
        beginDate: '20140301',
        endDate: '20160301',
        ...params
      }
    }, function (data) {
      commit(types.DEPOSIT_BUY, {lists: data});
    });
  },
  queryDrawHistory({ commit }, params = {}){
    financeService.queryDrawHistory({
      url: 'queryDrawHistory',
      qs: {
        businessType: '00',
        ccy: 'RMB',
        productType: '1',
        beginDate: '20140301',
        endDate: '20160301',
        ...params
      }
    }, function (data) {
      commit(types.DEPOSIT_BUY_, {lists: data});
    });
  }
};

// mutations
const mutations = {
  //定活通详情
  [types.DEPOSIT_DETAIL](state, payload){
    state.aipFund.lists = payload.lists;
    state.aipFund.lists.ccy = fit.monetaryUnit(state.aipFund.lists.ccy);
    localStorage.setItem('saveDeadline', state.aipFund.lists.saveDeadline);
    state.aipFund.lists.saveDeadline = fit.year(state.aipFund.lists.saveDeadline);
    state.aipFund.lists.depositAmtMin2 = fit.formatMoneyNumber(state.aipFund.lists.depositAmtMin, 'blur');
    state.aipFund.lists.interestRate = Number(state.aipFund.lists.interestRate).toFixed(3) + '%';
  },
  //定活通历史支取利率
  [types.DEPOSIT_BUY](state, payload){
    state.history.lists = payload.lists
  },
  [types.DEPOSIT_BUY_](state, payload){
    state.history.real = payload.lists
  }
};

export default {
  state,
  actions,
  mutations
}
