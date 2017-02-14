import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import survey from './views/Survey/index'
import Login from './components/Login'
import TodoList from './components/TodoList'

export default new Router({
    routes: [{
    path: '/',
    name: 'survey',
    component: Login
  },{
    path: '/todolist',
    name: 'todolist',
    component: TodoList
  },{
      path: '*',
      redirect: '/' // 输入其他不存在的地址自动跳回首页
  }]
});
