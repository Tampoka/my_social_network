import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {authAPI} from "../api/api";
import {chatAPI, IMessage} from '../api/chat-api';
import {Dispatch} from 'redux';

const initialState = {
    messages: [] as IMessage[]
}

type InitialStateType = typeof initialState
const chatReducer = (state: InitialStateType = initialState, action: ChatActionsType): InitialStateType => {
    switch (action.type) {
        case 'CHAT/RECEIVE_MESSAGES':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages],
            }
        default:
            return state
    }
}

export  type ChatActionsType =
    | SetReceivedMessagesActionType


export type SetReceivedMessagesActionType = ReturnType<typeof receiveMessages>

export const receiveMessages = (messages: IMessage[]) => ({
    type: 'CHAT/RECEIVE_MESSAGES',
    payload: {messages}
} as const)

//thunk
let _newMessageHandler: ((messages: IMessage[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages => {
            dispatch(receiveMessages(messages))
        })
    }
    return _newMessageHandler
}
export const startReceivingMessages = () =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, ChatActionsType>) => {
        chatAPI.subscribe(newMessageHandlerCreator(dispatch))
    }

export const stopReceivingMessages = () =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, ChatActionsType>) => {
        chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
    }

export default chatReducer