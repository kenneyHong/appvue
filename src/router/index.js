import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import login from '@/views/login'
import notfound from '@/views/404'
import cargoStorage from '@/views/cargoStorage'
import createData from '@/views/createData'
import walletAccount from '@/views/walletAccount'
import accountApplication from '@/views/accountApplication'
import withdrawalApplication from '@/views/withdrawalApplication'
import personalRechargeHistory from '@/views/personalRechargeHistory'
import reconciliationStatement from '@/views/reconciliationStatement'
import basicHousehold from '@/views/basicHousehold'
import operatorManagement from '@/views/operatorManagement'
import operatorsFlow from '@/views/operatorsFlow'
import operatingAccount from '@/views/operatingAccount'
import EwalletrechargeReport from '@/views/EwalletrechargeReport'
import depositData from '@/views/depositData'
import withdrawal from '@/views/withdrawal'
import lnPlatformTransferBill from '@/views/lnPlatformTransferBill'
import EWalletManagement from '@/views/EWalletManagement'

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
        name: '电子钱包账户列表'
      }
    },
    {
      path: '/EWalletManagement',
      component: EWalletManagement,
      meta: {
        name: '电子钱包管理'
      }
    },
    {
      path: '/withdrawalApplication',
      component: withdrawalApplication,
      meta: {
        name: '电子钱包提现申请'
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
      component: personalRechargeHistory,
      meta: {
        name: '电子钱包（基本户）充值记录'
      }
    },
    {
      path: '/reconciliationStatement',
      component: reconciliationStatement,
      meta: {
        name: '电子钱包（基本户）对账报表'
      }
    },
    {
      path: '/basicHousehold',
      component: basicHousehold,
      meta: {
        name: '电子钱包（基本户）流水'
      }
    },
    {
      path: '/operatorManagement',
      component: operatorManagement,
      meta: {
        name: '电子钱包(运营户)管理'
      }
    },
    {
      path: '/operatorsFlow',
      component: operatorsFlow,
      meta: {
        name: '电子钱包(运营户)流水'
      }
    },
    {
      path: '/operatingAccount',
      component: operatingAccount,
      meta: {
        name: '电子钱包(运营户)对账报表'
      }
    },
    {
      path: '/EwalletrechargeReport',
      component: EwalletrechargeReport,
      meta: {
        name: '电子钱包(运营户)充值报表'
      }
    },
    {
      path: '/withdrawal',
      component: withdrawal,
      meta: {
        name: '出金单'
      }
    },
    {
      path: '/depositData',
      component: depositData,
      meta: {
        name: '入金单'
      }
    },
    {
      path: '/lnPlatformTransferBill',
      component: lnPlatformTransferBill,
      meta: {
        name: '平台内转账单'
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
