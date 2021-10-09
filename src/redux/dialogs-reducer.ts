import {DialogsPageType, MessageType} from "./store";
import {AddPostActionType, UpdateNewPostActionType} from "./profile-reducer";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer=(state:DialogsPageType, action:AddMessageActionType|UpdateNewMessageActionType)=>{
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: 6,
                message: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}
export type ActionsType=AddPostActionType|UpdateNewPostActionType|AddMessageActionType|UpdateNewMessageActionType

export type AddMessageActionType =ReturnType<typeof addMessageActionCreator>

export type UpdateNewMessageActionType = ReturnType<typeof updateNewMessageTextActionCreator>

export const addMessageActionCreator = ()=> ( {type: ADD_MESSAGE}as const)

export const updateNewMessageTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
} as const)


export  default dialogsReducer