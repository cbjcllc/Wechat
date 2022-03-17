import { FORM } from '../type'
import { Dispatch } from 'react'
import { Action } from 'redux-actions'
import api from '../../utils/api/axios'
import { actions } from '../action'
import { afterLogin } from './alias'
import { ACTION_TYPE } from '../actionType'

export const register = (form: FORM) => {
  return async (dispatch: Dispatch<Action<any>>) => {
    try {
      const [token, uuid] = (await api.post('/auth/register', {
        data: form,
      })) as string[]
      await afterLogin(dispatch, { ...form, uuid }, token)
    } catch (err: any) {
      console.log(err, actions)
      dispatch(actions(ACTION_TYPE.REGISTER_ERROR)(err?.response?.data?.error))
    }
  }
}
