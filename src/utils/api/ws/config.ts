import { Token } from '../token'
import { actions } from '../../../store/action'
import { store } from '../../../store/store'
import { ACTION_TYPE } from '../../../store/actionType'

export const getToken = Token.get
export const URL = '192.168.43.156:1758'
export const cbkReceiveMsg = (msg: string) => {
  store.dispatch(actions(ACTION_TYPE.ADD_MESSAGES)([msg]))
}
export const TIMEOUT = 5000
