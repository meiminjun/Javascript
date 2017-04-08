import 'utils/common'
import Vue from 'vue'
import app from './index.vue'
// import '../../assets/scss/deposit/style'
import { Loadmore, Spinner, Header } from 'mint-ui'
import 'mint-ui/lib/header/style.css'
import 'mint-ui/lib/loadmore/style.css'
import 'mint-ui/lib/spinner/style.css'

Vue.component(Loadmore.name, Loadmore)
Vue.component(Spinner.name, Spinner)
Vue.component(Header.name, Header)

new Vue({
  el: '#app',
  render: h => h(app)
})