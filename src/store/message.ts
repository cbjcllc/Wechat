import { createReducer, action } from 'typesafe-actions'

import {
  BaseModel,
  create,
  del,
  update,
  getEmptyState,
  BaseState,
} from './baseState'

const MESSAGE_ACTION = {
  create: 'message/create',
  del: 'message/del',
  update: 'message/update',
}

interface MESSAGE extends BaseModel {
  type: 'MESSAGE'
  msgType: string
  content: string // 文本 或 数据url
  chatroomUuid: string
  userUuid: string
}

export const createMsg = (message: MESSAGE) =>
  action(MESSAGE_ACTION.create, { uuid: message.uuid, model: message })

export const delMsg = () => action(MESSAGE_ACTION.del)

export const updateMsg = (message: MESSAGE) =>
  action(MESSAGE_ACTION.update, { uuid: message.uuid, model: message })

export const messageReducer = createReducer<BaseState<MESSAGE>>(
  getEmptyState<MESSAGE>()
)
  .handleAction(createMsg, create<MESSAGE>())
  .handleAction(delMsg, del<MESSAGE>())
  .handleAction(updateMsg, update<MESSAGE>())
