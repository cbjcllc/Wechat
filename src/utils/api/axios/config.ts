import { Token } from '../token'

export const getToken = Token.get
export const BASE_URL = 'http://192.168.43.156:1758/'
export const validateStatus = (status: number) => {
  return status < 500
}
