import 'utils/common'
import store from '@/store'
import Vue from 'vue'
import app from './index.vue'
// import Mint from 'mint-ui'
// import 'mint-ui/lib/style.css'
import { Spinner, Header, Button } from 'mint-ui'
import 'mint-ui/lib/header/style.css'
import 'mint-ui/lib/spinner/style.css'
import 'mint-ui/lib/button/style.css'

Vue.component(Spinner.name, Spinner)
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  store,
  render: h => h(app)
})
