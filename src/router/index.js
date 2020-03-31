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
      path: '/walletAccount/index',
      component: walletAccount,
      meta: {
        name: '电子钱包账户列表'
      }
    },
    {
      path: '/EWalletManagement/index',
      component: EWalletManagement,
      meta: {
        name: '电子钱包管理'
      }
    },
    {
      path: '/withdrawalApplication/index',
      component: withdrawalApplication,
      meta: {
        name: '电子钱包提现申请'
      }
    },
    {
      path: '/accountApplication/index',
      component: accountApplication,
      meta: {
        name: '电子钱包开户申请'
      }
    },
    {
      path: '/personalRechargeHistory/index',
      component: personalRechargeHistory,
      meta: {
        name: '电子钱包（基本户）充值记录'
      }
    },
    {
      path: '/reconciliationStatement/index',
      component: reconciliationStatement,
      meta: {
        name: '电子钱包（基本户）对账报表'
      }
    },
    {
      path: '/basicHousehold/index',
      component: basicHousehold,
      meta: {
        name: '电子钱包（基本户）流水'
      }
    },
    {
      path: '/operatorManagement/index',
      component: operatorManagement,
      meta: {
        name: '电子钱包(运营户)管理'
      }
    },
    {
      path: '/operatorsFlow/index',
      component: operatorsFlow,
      meta: {
        name: '电子钱包(运营户)流水'
      }
    },
    {
      path: '/operatingAccount/index',
      component: operatingAccount,
      meta: {
        name: '电子钱包(运营户)对账报表'
      }
    },
    {
      path: '/ewalletrechargeReport/index',
      component: EwalletrechargeReport,
      meta: {
        name: '电子钱包(运营户)充值报表'
      }
    },
    {
      path: '/withdrawal/index',
      component: withdrawal,
      meta: {
        name: '出金单'
      }
    },
    {
      path: '/depositData/index',
      component: depositData,
      meta: {
        name: '入金单'
      }
    },
    {
      path: '/lnPlatformTransferBill/index',
      component: lnPlatformTransferBill,
      meta: {
        name: '平台内转账单'
      }
    },
    {
      path: '/createData/index',
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
