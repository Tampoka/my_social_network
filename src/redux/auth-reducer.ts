import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {authAPI, securityAPI} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";

const SET_USER_DATA = "/auth/SET-USER-DATA";
const SET_CAPTCHA_URL = "/auth/SET-CAPTCHA-URL";

export type InitialStateType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
    captchaUrl: null | string
}


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null   //if null, captcha is not required
}
const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case '/auth/SET-CAPTCHA-URL':
            return {
                ...state,
                captchaUrl: action.payload.captchaUrl
            }
        default:
            return state
    }
}

export  type AuthActionsType =
    | SetUserDataActionType
    | SetCaptchaUrlActionType


export type SetUserDataActionType = ReturnType<typeof setAuthUserData>
export type SetCaptchaUrlActionType = ReturnType<typeof setCaptchaUrl>

export const setAuthUserData = (userId: null | string, email: null | string, login: null | string, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
} as const)
export const setCaptchaUrl = (captchaUrl: string | null) => ({
    type: SET_CAPTCHA_URL,
    payload: {captchaUrl}
} as const)

//thunk

export const getAuth = () =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, AuthActionsType>) => {
        const response = await authAPI.authMe()
        if (response.resultCode === 0) {
            let {id, email, login} = response.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }

export const login = (email: string, password: string, rememberMe: boolean,captcha:string|null) =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, FormAction>) => {
        const response = await authAPI.login(email, password, rememberMe)
        if (response.resultCode === 0) {
            await dispatch(getAuth())
        } else {
            if (response.resultCode === 10) {
                await dispatch(getCaptchaUrl)
            }
            let message = response.messages.length > 0 ? response.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: message}))
        }
    }

export const logout = () =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, AuthActionsType>) => {
        const response = await authAPI.logout()
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }

export const getCaptchaUrl = () =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, AuthActionsType>) => {
        const response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url
        dispatch(setCaptchaUrl(captchaUrl))
    }

export default authReducer