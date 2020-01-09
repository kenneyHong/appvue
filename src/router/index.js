import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import login from '@/views/login'
import notfound from '@/views/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: home,
      meta: {
        name: '首页'
      }
    },
    {
      path: '/login',
      component: login,
      meta: {
        name: '登录页'
      }
    },
    {
      path: '*',
      component: notfound,
      meta: {
        name: '404'
      }
    }
  ]
})
