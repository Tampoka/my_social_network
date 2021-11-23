import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {authAPI} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";

const SET_USER_DATA = "/auth/SET-USER-DATA";

export type InitialStateType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export  type AuthActionsType =
    SetUserDataActionType


export type SetUserDataActionType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId: null | string, email: null | string, login: null | string, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
} as const)

//thunk

export const getAuth = () =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, AuthActionsType>) => {
        let response = await authAPI.authMe()
        if (response.resultCode === 0) {
            let {id, email, login} = response.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }

export const login = (email: string, password: string, rememberMe: boolean) =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, FormAction>) => {
        let response = await authAPI.login(email, password, rememberMe)
        if (response.resultCode === 0) {
            dispatch(getAuth())
        } else {
            let message = response.messages.length > 0 ? response.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: message}))
        }
    }

export const logout = () =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, AuthActionsType>) => {
        let response=await authAPI.logout()
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
    }

export default authReducer