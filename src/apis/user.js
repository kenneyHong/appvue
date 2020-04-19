import fetch from '@/utilities/fetch'

export const USERS_API_GETHUPUDATA = parameters => {
  return fetch({
    url: '/getHupuData',
    method: 'get',
    params: parameters
  })
}
export const GOODS_API_CREATEFALSEDATA = parameters => {
  return fetch({
    url: '/createFalseData',
    method: 'get',
    params: parameters
  })
}
export const GOODS_API_GETGOODSDATA = parameters => {
  return fetch({
    url: '/clearing/getGoodsData',
    method: 'get',
    params: parameters
  })
}

export const USERS_API_REGISTERED = parameters => {
  return fetch({
    url: '/user/registered',
    method: 'post',
    data: parameters
  })
}

export const USERS_API_LOGIN = parameters => {
  return fetch({
    url: '/user/login',
    method: 'post',
    data: parameters
  })
}

export const CLEARING_API_CREATEACCOUNTLIST = parameters => {
  return fetch({
    url: '/clearing/createAccountList',
    method: 'get',
    params: parameters
  })
}
/* 获取用户状态 */
export const USERS_API_GETSTATE = parameters => {
  return fetch({
    url: '/user/getState',
    method: 'get',
    params: parameters
  })
}
/* 电子钱包账户列表 */
export const CLEARING_API_GETACCOUNTLIST = parameters => {
  return fetch({
    url: '/clearing/getAccountList',
    method: 'get',
    params: parameters
  })
}

/* 开通电子钱包 */
export const CLEARING_API_OPENACCOUNTWALLET = parameters => {
  return fetch({
    url: '/clearing/openAccountWallet',
    method: 'post',
    params: parameters
  })
}

/* 绑定银行卡 */
export const CLEARING_API_BINDBANKCARD = parameters => {
  return fetch({
    url: '/clearing/bindBankCard',
    method: 'post',
    params: parameters
  })
}
/* 获取银行卡信息 */
export const CLEARING_API_GETBANKCARD = parameters => {
  return fetch({
    url: '/clearing/getBankCard',
    method: 'post',
    params: parameters
  })
}
/* 更改绑定银行卡 */
export const CLEARING_API_UPDATEBANKCARD = parameters => {
  return fetch({
    url: '/clearing/updateBankCard',
    method: 'post',
    params: parameters
  })
}
/* 电子钱包开户申请 */
export const CLEARING_API_GETOPENLIST = parameters => {
  return fetch({
    url: '/clearing/getOpenList',
    method: 'get',
    params: parameters
  })
}