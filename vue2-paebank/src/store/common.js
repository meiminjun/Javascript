import * as types from './types';

const state = {
    loading: false
};

const mutations = {
    [types.COMMON_LOADING] (state, payload) {
        state.loading = payload
    }
};

const getters = {};

const actions = {};

export default {
    state,
    getters,
    actions,
    mutations
}