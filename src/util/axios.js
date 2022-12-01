// 封装axios请求，返回重新封装的数据格式

// 对错误的统一处理

import axios from 'axios'
import errorHandle from './errorHandle.js'

const instance = axios.create()
instance.interceptors.request.use((config) => {
  // Do something before request is sent
  return config
}, (err) => {
  // Do something with request error
  errorHandle(err)
  return Promise.reject(err)
})

instance.interceptors.response.use(function (res) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  if (res.status === 200) {
    return Promise.resolve(res.data)
  } else {
    return Promise.reject(res)
  }
}, (err) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  errorHandle(err)
  return Promise.reject(err)
})
export default instance
