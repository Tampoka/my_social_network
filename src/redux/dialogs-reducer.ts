import {AddPostActionType, UpdateNewPostActionType} from "./profile-reducer";

export type InitialStateType = {
    dialogs: DialogType[]
    messages: MessageType[]
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
}
const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: 6,
                message: action.newMessage,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }

        default:
            return state
    }
}
export type ActionsType =
    AddPostActionType
    | UpdateNewPostActionType
    | AddMessageActionType

export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>

export const
    addMessageActionCreator = (newMessage:string) => ({type: ADD_MESSAGE,newMessage} as const)


export default dialogsReducer