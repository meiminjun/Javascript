import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import common from './common'
import depositDetail from './modules/depositDetail'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

let store = new Vuex.Store({
    // actions,
    // getters,
  modules: {
    common,
    depositDetail
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

window.__store = store

export default store
