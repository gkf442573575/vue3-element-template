import axios from 'axios'
import qs from 'qs'
import router from '@/routes'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 20000,
  responseType: 'json'
})

// 请求拦截
service.interceptors.request.use(
  (config) => {
    config.method = config.method.toLowerCase()
    if (
      (config.method === 'post' || config.method === 'put') &&
      config.headers &&
      config.headers['Content-Type'] !== 'application/json'
    ) {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
// 响应拦截
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (response.status !== 200) {
      const message = res.message
        ? res.message.indexOf('timeout') > -1
          ? '请求超时，请稍后'
          : res.message
        : '网络异常'
      return Promise.reject(new Error(message || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    if (error.response.status === 401) {
      router.replace({
        path: '/login'
      })
    }
    let message = error.message
    message = message.indexOf('timeout') > -1 ? '请求超时，请稍后' : '网络异常请稍后重试'
    return Promise.reject(message)
  }
)
export default service
