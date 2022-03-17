import { action, createReducer } from 'typesafe-actions'

import {
  BaseModel,
  BaseState,
  create,
  del,
  getEmptyState,
  update,
} from './baseState'

const CHATROOM_ACTION = {
  create: 'chatroom/create',
  del: 'chatroom/del',
  update: 'chatroom/update',
}

interface CHATROOM extends BaseModel {
  type: 'CHATROOM'
  name?: string
  icon?: string
  messages?: string[]
  members?: string[]
  chatroomType?: string
}

export const createChatroom = (message: CHATROOM) =>
  action(CHATROOM_ACTION.create, { uuid: message.uuid, model: message })

export const delChatroom = () => action(CHATROOM_ACTION.del)

export const updateChatroom = (message: CHATROOM) =>
  action(CHATROOM_ACTION.update, { uuid: message.uuid, model: message })

export const chatroomReducer = createReducer<BaseState<CHATROOM>>(
  getEmptyState<CHATROOM>()
)
  .handleAction(createChatroom, create<CHATROOM>())
  .handleAction(delChatroom, del<CHATROOM>())
  .handleAction(updateChatroom, update<CHATROOM>())
