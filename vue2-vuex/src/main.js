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


router.beforeEach((to,from,next) => {
  const token = sessionStorage.getItem('demo-token');
  if(to.path == '/') {
    if(token != 'null' && token != null) {
      next('/todolist')
    }
    next(); // 否则跳转会登录
  }else{
    if(token != 'null' && token != null) {
      Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token; // 全局设定header的token验证，注意Bearer后有个空格
      next() // 如果有token则正常跳转
    }else {
      next('/') // 否则跳转首页
    }
  }
})


var app = window.app = new Vue({
	router,
  store,
  render: h => h(App)
}).$mount('#app')
