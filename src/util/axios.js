// 封装axios请求，返回重新封装的数据格式

// 对错误的统一处理

import axios from 'axios'
import errorHandle from './errorHandle.js'

class HttpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }

  getInsideConfig () {
    const config = {
      baseUrl: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      timeout: 10000
    }
    return config
  }

  // 设定拦截器
  interceptors (instance) {
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
  }

  // 创建实例
  request (options) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(newOptions)
  }

  get (url, config) {
    const options = Object.assign(
      { method: 'get', url: url }, config)
    return this.request(options)
  }

  post (url, data) {
    return this.request({
      method: 'post',
      url: url,
      data: data
    })
  }
}

export default HttpRequest
