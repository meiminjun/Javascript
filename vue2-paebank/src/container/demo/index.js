import '../../util/common'
import store from '../../store'
import Vue from 'vue'
import vueE from 'vue-echarts'
import app from './index.vue'
import '../../assets/scss/deposit/style'

Vue.component('vueCharts', vueE)
new Vue({
  el: '#app',
  store,
  render: h => h(app)
})
