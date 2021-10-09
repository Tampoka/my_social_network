import {PostType, ProfilePageType} from "./store";
import {AddMessageActionType, UpdateNewMessageActionType} from "./dialogs-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer=(state:ProfilePageType, action:AddPostActionType|UpdateNewPostActionType)=>{
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