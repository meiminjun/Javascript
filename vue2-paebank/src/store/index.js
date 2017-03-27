import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import common from './common'
import detail from './modules/detail'
import depositDetail from './modules/depositDetail'
import dhtDetail from './modules/order'
import fund from './modules/fund'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

let store = new Vuex.Store({
    // actions,
    // getters,
    modules: {
        common,
        fund,
        detail,
        dhtDetail,
        depositDetail
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});

window.__store = store;

export default store;

