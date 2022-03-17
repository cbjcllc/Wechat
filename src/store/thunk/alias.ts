import {Dispatch} from "react";
import {Action} from "redux-actions";
import {USER} from "../type";
import {actions} from "../action";
import {connect} from "../../utils/api/ws";
import { global } from '../../global'
import { ACTION_TYPE } from "../actionType";

export const afterLogin = async (
    dispatch: Dispatch<Action<any>>,
    user: USER,
    token: string
) => {
    dispatch(actions(ACTION_TYPE.CURRENT_USER)(user.uuid))
    dispatch(actions(ACTION_TYPE.ADD_USER)(user))
    dispatch(actions(ACTION_TYPE.SAVE_TOKEN)(token))
    try {
        await connect()
        global.nav('/list')
    } catch (e) {
        console.log(e)
    }
}