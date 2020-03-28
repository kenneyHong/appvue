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
/*
  CapitalCode  资金账号
  AccountName  户名
  BankEcode  银行电子账号
  LastOpenTime  开户时间
  CharacterType  商户类型
  CompanyCode  公司编码
  CompanyName  公司名称
  StoreCode  门店编码
  StoreName  门店名称
  // 账户余额
  SubSumed  总金额
  BaseSumed  基本账户
  OpSumed  运营账户
  // 可用金额
  SubValid  总金额
  BaseValid  基本账户
  OpValid  运营账户
  // 锁定金额
  SubLock  总金额
  BaseLock  基本账户
  OpLock  运营账户
  State  账户状态
  PageSize  *分页条数(Number)
  PageIndex  *分页索引(Number)
  OrderBy *排序字段 (1: 最后操作时间 2: 资金账号)
  IsAsced *是否升序 (1: 正序 3: 倒序)
*/
export const CLEARING_API_GETACCOUNTLIST = parameters => {
  return fetch({
    url: '/clearing/getAccountList',
    method: 'get',
    params: parameters
  })
}

