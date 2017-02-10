import Vue from 'vue'
import ElementUI from 'element-ui' // 引入element-ui
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import store from './vuex'

import App from './App.vue'

Vue.use(ElementUI)
/* eslint-disable no-new */

// Vue.config.debug = true;

var app = window.app = new Vue({
	router,
  store,
  render: h => h(App)
}).$mount('#app')
