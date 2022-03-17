import { cbkReceiveMsg } from './config'
export const receive = (msg: string) => {
  cbkReceiveMsg(msg)
}
