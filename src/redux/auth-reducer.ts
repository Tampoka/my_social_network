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
const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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

export  type ActionsType =
    SetUserDataActionType


export type SetUserDataActionType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId:null | string, email:null | string, login:null | string) => ({
    type: SET_USER_DATA,
    data:{userId, email, login}
} as const)


export default authReducer