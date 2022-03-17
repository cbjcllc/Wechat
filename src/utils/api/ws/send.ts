import { WS } from './index'
import { TIMEOUT } from './config'

export const send = (ws: WS, msg: string, cbkSendMsg: Function) => {
  ws.timeout(TIMEOUT).emit('msg', msg, (response: { status: number }) => {
    if (response.status === 200) {
      cbkSendMsg()
    }
  })
}
