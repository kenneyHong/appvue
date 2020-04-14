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
/*
  BillNumber 单据编号
  Supplier  供应商
  SourceType  来源
  CreateTime  创建时间
  PurchaseUser  采购员
  PurchaseNumber  采购数量(Number)
  PurchaseCost  采购成本(Number)
  CheckTime  最后操作时间
  State  状态(Number)
  PageSize  *分页条数(Number)
  PageIndex  *分页索引(Number)
*/
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
