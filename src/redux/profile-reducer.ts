import {AddMessageActionType, UpdateNewMessageActionType} from "./dialogs-reducer";

export type InitialStateType={
    posts:PostType[]
    newPostText:string
}

type PostType = {
    id: number
    message: string
    likesCount: number
}

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState={
    posts: [
        {id: 1, message: "How are you?", likesCount: 19},
        {id: 2, message: "Where have you been?", likesCount: 3},
        {id: 3, message: "Pics from our party yesterday", likesCount: 8},
        {id: 4, message: "How important is to be proactive?", likesCount: 27},
        {id: 5, message: "What are your goals for today, for this week?", likesCount: 54},
    ],
    newPostText: "Hello!"
}
const profileReducer=(state:InitialStateType=initialState, action:ActionsType):InitialStateType=>{
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export type ActionsType=AddPostActionType|UpdateNewPostActionType|AddMessageActionType|UpdateNewMessageActionType

export type AddPostActionType = ReturnType<typeof addPostActionCreator>

export type UpdateNewPostActionType = ReturnType<typeof updateNewPostTextActionCreator>

export const addPostActionCreator = ()=> ({type: ADD_POST}as const)

export const updateNewPostTextActionCreator = (text: string)=> ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
} as const)


export default profileReducer