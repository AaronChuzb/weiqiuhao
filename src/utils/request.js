import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: '/api', // url = base url + request url
  timeout: 5000 // request timeout
})

// 请求拦截
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response
    if (res.status !== 200) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res.data
    }
  },
  error => {
    Message({
      message: error.response.data.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service