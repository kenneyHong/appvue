import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import login from '@/views/login'
import notfound from '@/views/404'
import cargoStorage from '@/views/cargoStorage'
import createData from '@/views/createData'
import walletAccount from '@/views/walletAccount'

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
      path: '/cargoStorage',
      component: cargoStorage,
      meta: {
        name: '货品入库'
      }
    },
    {
      path: '/walletAccount',
      component: walletAccount,
      meta: {
        name: '电子钱包账户'
      }
    },
    {
      path: '/createData',
      component: createData,
      meta: {
        name: '测试页'
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
