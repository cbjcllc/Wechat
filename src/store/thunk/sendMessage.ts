import { Dispatch } from 'react'
import { Action } from 'redux-actions'
import { CHATROOMS_STATE } from '../type'
import { formate } from '../util'
import { actions } from '../action'
import { sendMsg } from '../../utils/api/ws'
import { ACTION_TYPE } from '../actionType'

export const sendMessage = (content: string) => {
  return async (
    dispatch: Dispatch<Action<any>>,
    getState: () => CHATROOMS_STATE
  ) => {
    const state = getState()
    const message = formate(content, state)
    dispatch(actions(ACTION_TYPE.ADD_MESSAGES)([message]))
    dispatch(actions(ACTION_TYPE.SENDING_MESSAGE)(message.uuid))
    sendMsg(message + '', () =>
      dispatch(actions(ACTION_TYPE.SENT_MESSAGE)(message.uuid))
    )
  }
}
