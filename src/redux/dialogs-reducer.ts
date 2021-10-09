import {AddMessageActionType, DialogsPageType, MessageType, UpdateNewMessageActionType} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const dialogsReducer=(state:DialogsPageType, action:AddMessageActionType|UpdateNewMessageActionType)=>{
if (action.type === ADD_MESSAGE) {
        const newMessage: MessageType = {
            id: 6,
            message: state.newMessageText,
        }
        state.messages.push(newMessage)
        state.newMessageText = ""

    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newText
    }
    return state
}