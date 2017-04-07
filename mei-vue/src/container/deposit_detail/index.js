import 'utils/common'
import store from '@/store'
import Vue from 'vue'
import vueE from 'vue-echarts'
import app from './index.vue'
Vue.component('vueCharts', vueE)
new Vue({
  el: '#app',
  store,
  render: h => h(app)
})
