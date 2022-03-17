import { CHATROOMS_STATE, MESSAGE } from '../type'
import api from '../../utils/api/axios'
import { actions } from '../action'
import { ACTION_TYPE } from '../actionType'

export const syncMessagesThunk = () => {
  return async (dispatch: Function, getState: () => CHATROOMS_STATE) => {
    const state = getState()
    const data = await api.get<MESSAGE[]>('message/' + state.currentChatroom, {
      params: new Date(),
    })
    data && dispatch(actions(ACTION_TYPE.ADD_MESSAGES)(data))
  }
}
