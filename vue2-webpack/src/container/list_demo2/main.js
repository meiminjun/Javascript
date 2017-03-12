import '../../util/common';
import Vue from 'vue';
import Vuex from 'vuex';
import app from './index.vue'
import 'assets/scss/deposit/style.scss'

import { Loadmore, Spinner } from 'mint-ui';
import 'mint-ui/lib/loadmore/style.css'
import 'mint-ui/lib/spinner/style.css'

Vue.component(Loadmore.name, Loadmore);
Vue.component(Spinner.name, Spinner);

Vue.use(Vuex);

new Vue({
    el: '#app',
    render: h => h(app)
});
