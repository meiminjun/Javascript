import '../../util/common';

import Vue from 'vue';
import Vuex from 'vuex';
import common from '../../store/common';
import dhtDetail from '../../store/modules/order';
import app from './index.vue'
import 'assets/scss/deposit/style.scss'
import createLogger from 'vuex/dist/logger';
//import { Loadmore, Spinner } from 'mint-ui';
//import { InfiniteScroll } from 'mint-ui'
//
//Vue.use(InfiniteScroll);
//Vue.component(Loadmore.name, Loadmore);
//Vue.component(Spinner.name, Spinner);


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

let store = new Vuex.Store({
    modules: {
        common,
        dhtDetail
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});

window.__store = store;


new Vue({
    el: '#app',
    store,
    render: h => h(app)
})

// console.log('haha')
