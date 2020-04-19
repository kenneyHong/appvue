import axios from 'axios';
import cookies from 'js-cookie'
import router from '@/router'
import { Message } from 'element-ui'
const service = axios.create({
  timeout: 600000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json;charset=utf-8'
  }
});
// request???
service.interceptors.request.use(
  config => {
    config.url = 'http://192.168.31.121:3000' + config.url
    if (config.method === 'post') {
      config.data = JSON.stringify(config.data)
    }
    config.headers.common = {
      'access-token': cookies.get('access-token'),
      'name:': cookies.get('name')
    }
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)
// respone???
service.interceptors.response.use(
  response => {
    const code = response.data.Code
    if (code == 'SIGNATURE') {
      Message.error(response.data.Message)
      router.replace({
        path: '/login'
      })
    }
    if (code == 'ERROR') {
      Message.error(response.data.Message)
    }
    Message.success(response.data.Message)
    return response.data
  },
  error => {
    Message.error('系统繁忙，请稍后再试！')
    return Promise.reject(error)
  }
)

export default service