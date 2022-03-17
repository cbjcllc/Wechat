import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export class AxiosClient {
  client: AxiosInstance
  catchError() {}
  constructor(
    baseURL: string,
    resolve: (value: AxiosResponse<any, any>) => AxiosResponse<any, any>
  ) {
    this.client = axios.create({
      baseURL,
      responseType: 'json',
    })
    this.client
      .request({ method: 'get', data: {} })
      .then(resolve, this.catchError)
  }

  request(requestConfig: AxiosRequestConfig) {
    return requestConfig
  }
}
