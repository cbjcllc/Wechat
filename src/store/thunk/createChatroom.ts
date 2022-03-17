import { Dispatch } from 'react'
import { Action } from 'redux-actions'

import api from '../../utils/api/axios'
import { createChatroom } from '../actions'

export const createChatroomThunk = () => {
  return async (dispatch: Dispatch<Action<any>>) => {
    const uuid = (await api.post('/chatroom')) as string
    dispatch(createChatroom({ uuid, type: 'CHATROOM' }))
  }
}
