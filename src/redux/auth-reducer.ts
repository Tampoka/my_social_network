const SET_USER_DATA = "SET-USER-DATA";

export type InitialStateType = {
    userId: null | string
    email: null | string
    login: null | string
}


const initialState = {
    userId: null,
    email: null,
    login: null,
}
const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export  type ActionsType =
    SetUserDataActionType


export type SetUserDataActionType = ReturnType<typeof setUserData>

export const setUserData = (userId:null | string, email:null | string, login:null | string) => ({
    type: SET_USER_DATA,
    data:{userId, email, login}
} as const)


export default authReducer