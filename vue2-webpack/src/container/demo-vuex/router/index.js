import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '../components/TodoList'
import Login from '../components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: TodoList
    }, {
      path: '*',
      redirect: '/' // 输入其他不存在的地址自动跳回首页
    }
  ]
})
