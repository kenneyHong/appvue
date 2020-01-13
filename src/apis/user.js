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
    data: parameters
  })
}
export const GOODS_API_CREATEFALSEDATA = parameters => {
  return fetch({
    url: '/createFalseData',
    method: 'get',
    data: parameters
  })
}