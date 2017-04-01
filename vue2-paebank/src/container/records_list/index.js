import '../../util/common';
import Vue from 'vue';
import Vuex from 'vuex';
import common from '../../store/common';
import store from '../../store'
import dhtDetail from '../../store/modules/order';
import app from './index.vue'
import '../../assets/scss/deposit/style';
import createLogger from 'vuex/dist/logger';
import { Loadmore, Spinner } from 'mint-ui';

import 'mint-ui/lib/loadmore/style.css'
import 'mint-ui/lib/spinner/style.css'

Vue.component(Loadmore.name, Loadmore);
Vue.component(Spinner.name, Spinner);


new Vue({
    el: '#app',
    store,
    render: h => h(app)
})

// console.log('haha')
