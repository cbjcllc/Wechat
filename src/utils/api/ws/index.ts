import { io } from 'socket.io-client'

import { getToken, URL } from './config'
import { receive } from './receive'
import { send } from './send'

// socket.io 实例
const wsInstance = io(URL, {
  auth: {
    token: getToken(),
  },
  autoConnect: false,
})

//接收消息
wsInstance.on('msg', receive)

// 连接服务器
export const connect = () => {
  wsInstance.connect()
}

// 断开服务器
export const disconnect = () => {
  wsInstance.disconnect()
}

// 发送消息
export const sendMsg = (msg: string, callback: Function) => {
  send(wsInstance, msg, callback)
}

export type WS = typeof wsInstance
