import '../../util/common'
import store from '../../store'
import Vue from 'vue'
import app from './index.vue'
import '../../assets/scss/deposit/style'
//import PecKeyboard from '../../../node_modules/pa-ui/packages/pec-keyboard/src/keyboard.vue';
//Vue.component('PecKeyboard', PecKeyboard);
//import PecKeyboard from 'pa-ui/lib/pec-keyboard';
//import 'pa-ui/lib/pec-keyboard/style.css';
//import 'pa-ui/lib/pec-message-box/style.css';
//Vue.component(PecKeyboard.name, PecKeyboard);
new Vue({
  el: '#app',
  store,
  render: h => h(app)
})
