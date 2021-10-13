import {AddPostActionType, UpdateNewPostActionType} from "./profile-reducer";

export type InitialStateType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Victor"},
        {id: 3, name: "Bob"},
        {id: 4, name: "John"},
        {id: 5, name: "Anna"},
        {id: 6, name: "Dennis"},
    ],
    messages: [
        {id: 1, message: "How are you?"},
        {id: 2, message: "Are you busy now?"},
        {id: 3, message: "Today I have a party:)"},
        {id: 4, message: "Can you help me with code review today?"},
        {id: 5, message: "Are you going to gim today?"},
    ],
    newMessageText: "How have you been?"
}
const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: 6,
                message: state.newMessageText,
            }
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, newMessage]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
}
export type ActionsType =
    AddPostActionType
    | UpdateNewPostActionType
    | AddMessageActionType
    | UpdateNewMessageActionType

export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>

export type UpdateNewMessageActionType = ReturnType<typeof updateNewMessageTextActionCreator>

export const addMessageActionCreator = () => ({type: ADD_MESSAGE} as const)

export const updateNewMessageTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
} as const)


export default dialogsReducer