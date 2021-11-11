import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {authAPI} from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

export type InitialStateType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth:boolean
}


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:false
}
const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        default:
            return state
    }
}

export  type AuthActionsType =
    SetUserDataActionType


export type SetUserDataActionType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId:null | string, email:null | string, login:null | string) => ({
    type: SET_USER_DATA,
    data:{userId, email, login}
} as const)

//thunk

export const getAuth = () => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, AuthActionsType>) => {
        authAPI.authMe().then(data => {
            let {id, email, login} = data.data
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}

export const login = (email:string,password:string,rememberMe:boolean) => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, AuthActionsType>) => {
        authAPI.login(email,password,rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuth())
            }
        })
    }
}

export default authReducer