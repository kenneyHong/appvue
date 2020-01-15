import fetch from '@/utilities/fetch'

export const USERS_API_REGISTERED = parameters => {
  return fetch({
    url: '/registered',
    method: 'post',
    data: parameters
  })
}
export const USERS_API_LOGIN = parameters => {
  return fetch({
    url: '/login',
    method: 'post',
    data: parameters
  })
}
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
    url: '/getGoodsData',
    method: 'get',
    params: parameters
  })
}