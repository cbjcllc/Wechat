import axios, { AxiosRequestConfig } from 'axios'
import { BASE_URL, getToken, validateStatus } from './config'

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'

const client = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
})

const request =
  (method: 'post' | 'get' | 'delete' | 'put') =>
  async <T>(url: string, config: AxiosRequestConfig = {}) => {
    // 定义错误状态码范围
    config.validateStatus = validateStatus

    // 添加 token
    config.auth = getToken()

    return (await client[method]<T>(url, config))?.data
  }

const api = {
  post: request('post'),
  get: request('get'),
  delete: request('delete'),
  put: request('put'),
}

export default api
