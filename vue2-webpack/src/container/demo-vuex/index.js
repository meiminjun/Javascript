// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Axios from 'axios'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/reset.css'
import App from './App'
import router from './router'
import store from '../../store'
Vue.use(Mint)
console.log(Mint)
console.log(store.state.title)
// Vue.config.debug = true

Vue.prototype.$http = Axios // 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()等

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
