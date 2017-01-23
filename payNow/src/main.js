import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/reset.css'
import router from './router'
import store from './store'

import App from './App.vue'

Vue.use(Mint);

console.log(Mint);

Vue.config.debug = true;
// Vue.use(VueResource)

var app = window.app = new Vue({
	router,
  store,
  render: h => h(App)
}).$mount('#app')
