import '../../util/common'
import store from '../../store'
import Vue from 'vue'
import app from './index.vue'
import '../../assets/scss/deposit/style'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
new Vue({
  el: '#app',
  store,
  render: h => h(app)
})