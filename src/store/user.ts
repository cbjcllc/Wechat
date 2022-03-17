import { action, createReducer } from 'typesafe-actions'

import {
  BaseModel,
  BaseState,
  create,
  del,
  getEmptyState,
  update,
} from './baseState'

const USER_ACTION = {
  create: 'user/create',
  del: 'user/del',
  update: 'user/update',
}

interface USER extends BaseModel {
  type: 'USER'
  username?: string
  phone?: string
  nickname?: string
  friends?: string[]
  chatrooms?: string[]
}

export const createUser = (message: USER) =>
  action(USER_ACTION.create, { uuid: message.uuid, model: message })

export const delUser = () => action(USER_ACTION.del)

export const updateUser = (message: USER) =>
  action(USER_ACTION.update, { uuid: message.uuid, model: message })

export const userReducer = createReducer<BaseState<USER>>(getEmptyState<USER>())
  .handleAction(createUser, create<USER>())
  .handleAction(delUser, del<USER>())
  .handleAction(updateUser, update<USER>())
