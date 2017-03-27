import * as types from '../types';
import * as ald from '../../util/ald';
import api from '../../api/urls';

const state = {
    info: {},
    userInfo: {}
}

// actions
const actions = {
    queryCashInfo: function ({commit, state}, options = {}) {
        ald.http.request({
            method: 'GET',
            url:api.queryCashInfo,
            qs: {}
        }, function (res) {
            if (res && res.responseCode == '000000') {
                commit(types.CASH_DETAIL_INFO, {info: res.data || {}});
            } else {
                console.log(res);
            }
        });
    },
    getUserInfo: function ({commit, state}, options = {}) {
        ald.http.request({
            method: 'GET',
            url:api.getUserInfo,
            qs: {}
        }, function (res) {
            if (res && res.responseCode == '000000') {
                commit(types.CASH_USER_INFO, {userInfo: res.data || {}});
                options.cb && options.cb(res)
            } else {
                console.log(res);
            }
        });
    }
}

// mutations
const mutations = {
    [types.CASH_DETAIL_INFO](state, payload) {
        state.info = payload.info;
    },
    [types.CASH_USER_INFO](state, payload) {
        state.userInfo = payload.userInfo;
    }
}

export default {
    state,
    actions,
    mutations
}
