import {AppStateType} from "./redux-store";
import {getAuth} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";


const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

export type InitialStateType = {
    initialized: boolean
}

const initialState = {
    initialized: false
}
const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export  type AppActionsType =
    InitializedSuccessActionType


export type InitializedSuccessActionType = ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS,} as const)

//thunk

export const initializeApp = () =>
    (dispatch: ThunkDispatch<AppStateType, unknown, AppActionsType>) => {
        let promise = dispatch(getAuth())
       /* promise.then(()=>{
            dispatch(initializedSuccess())
        })*/
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess());
            });
    }

export default appReducer