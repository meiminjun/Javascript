import Vue from 'vue'
import Mint from 'mint-ui'
require('mint-ui/lib/style.css')
import './assets/css/reset.css'
import router from './router'
import store from './vuex'

import App from './App.vue'

Vue.use(Mint)
/* eslint-disable no-new */

Vue.config.debug = true;

var app = window.app = new Vue({
	router,
  store,
  render: h => h(App)
}).$mount('#app')
