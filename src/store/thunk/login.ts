import { FORM, USER } from '../type'
import { Dispatch } from 'react'
import { Action } from 'redux-actions'
import api from '../../utils/api/axios'
import { actions } from '../action'
import { ACTION_TYPE } from '../actionType'
import { afterLogin } from './alias'

export const login = (form: FORM) => {
  return async (dispatch: Dispatch<Action<any>>) => {
    try {
      const [user, token] = (await api.post('/auth/login', {
        data: form,
      })) as [USER, string]
      console.log(user, token, 'afterLogin')
      await afterLogin(dispatch, user, token)
    } catch (err: any) {
      console.log(err)
      dispatch(actions(ACTION_TYPE.REGISTER_ERROR)(err?.response?.data?.error))
    }
  }
}
