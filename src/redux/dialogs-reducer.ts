import {AddMessageActionType, DialogsPageType, MessageType, UpdateNewMessageActionType} from "./store";

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

export  default dialogsReducer