import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import login from './modules/login'
// import products from './modules/products'
import createLogger from 'Vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    title: '平安银行',
    isLogin: false
  },
  modules: {
    login
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
