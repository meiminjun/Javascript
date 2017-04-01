import '../../util/common';
import store from '../../store'
import Vue from 'vue';
import app from './index.vue'
import '../../assets/scss/deposit/style';

new Vue({
    el: '#app',
    store,
    render: h => h(app)
});

