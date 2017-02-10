import Vue from 'vue'
import Axios from 'axios'
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
Vue.prototype.$http = Axios // 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()等

var app = window.app = new Vue({
	router,
  store,
  render: h => h(App)
}).$mount('#app')
