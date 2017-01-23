import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import survey from '../views/Survey/index'

export default new Router({
    routes: [{
    path: '/',
    name: 'survey',
    component: survey
  }]
});