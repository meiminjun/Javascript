import '../../util/common';

import Vue from 'vue'
import store from '../../store'
import app from './index.vue'
import 'assets/scss/deposit/style.scss';



new Vue({
    el: '#app',
    store,
    render: h => h(app)
})

// console.log('haha')
