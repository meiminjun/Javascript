import financeService from '@/api/index'
import * as types from '../types'
import * as fit from '@/filters/deposit'

const state = {
  // 定投列表
  aipFund: {
    lists: []
  },
  history: {
    lists: [],
    real: []
  }
}

// actions
const actions = {
  getAipRecommend ({ commit }, params = {}) {
    financeService.getAipRecommend({
      url: 'queryFixedCurrentLinkList',
      // env: 'default',
      productClass: '1',
      ...params
    }, function (data) {
      commit(types.DEPOSIT_DETAIL, {lists: data.productList[0], pageNum: '1'})
    })
  }
}

// mutations
const mutations = {
  // 定活通详情
  [types.DEPOSIT_DETAIL] (state, payload) {
    state.aipFund.lists = payload.lists
    state.aipFund.lists.ccy = fit.monetaryUnit(state.aipFund.lists.ccy)
    localStorage.setItem('saveDeadline', state.aipFund.lists.saveDeadline)
    state.aipFund.lists.saveDeadline = fit.year(state.aipFund.lists.saveDeadline)
    state.aipFund.lists.depositAmtMin2 = fit.formatMoneyNumber(state.aipFund.lists.depositAmtMin, 'blur')
    state.aipFund.lists.interestRate = Number(state.aipFund.lists.interestRate).toFixed(3) + '%'
  }
}

export default {
  state,
  actions,
  mutations
}
