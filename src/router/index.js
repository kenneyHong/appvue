import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import login from '@/views/login'
import notfound from '@/views/404'
import cargoStorage from '@/views/cargoStorage'
import createData from '@/views/createData'
import walletAccount from '@/views/walletAccount'
import accountApplication from '@/views/accountApplication'
import accountManagement from '@/views/accountManagement'
import personalRechargeHistory from '@/views/personalRechargeHistory'
import reconciliationStatement from '@/views/reconciliationStatement'

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
      path: '/accountManagement',
      component: accountManagement,
      meta: {
        name: '电子钱包账户管理'
      }
    },
    {
      path: '/accountApplication',
      component: accountApplication,
      meta: {
        name: '电子钱包开户申请'
      }
    },
    {
      path: '/personalRechargeHistory',
      component:personalRechargeHistory,
      meta: {
        name: '电子钱包（基本户）充值记录'
      }
    },
    {
      path: '/reconciliationStatement',
      component:reconciliationStatement,
      meta: {
        name: '电子钱包（基本户）对账报表'
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
