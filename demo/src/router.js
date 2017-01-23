import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import survey from './pages/Survey/index'

export default new Router({
    routes: [{
    path: '/',
    name: 'survey',
    component: survey
  }]
});