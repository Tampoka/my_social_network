import {AddMessageActionType, UpdateNewMessageActionType} from "./dialogs-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {profileAPI} from "../api/api";

export type InitialStateType = {
    posts: PostType[]
    newPostText: string
    profile: null | ProfileType
    status: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        github: string | null
        instagram: string | null
        mainLink: string | null
        twitter: string | null
        vk: string | null
        website: string | null
        youtube: string | null
    }
    fullName: string | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    photos: {
        small: string | null
        large: string | null
    }
    userId: number
}
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

const initialState = {
    posts: [
        {id: 1, message: "How are you?", likesCount: 19},
        {id: 2, message: "Where have you been?", likesCount: 3},
        {id: 3, message: "Pics from our party yesterday", likesCount: 8},
        {id: 4, message: "How important is to be proactive?", likesCount: 27},
        {id: 5, message: "What are your goals for today, for this week?", likesCount: 54},
    ],
    newPostText: "Hello!",
    profile: null,
    status: ''
}
const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export type ProfileActionsType =
    AddPostActionType
    | UpdateNewPostActionType
    | AddMessageActionType
    | UpdateNewMessageActionType
    | SetUserProfileType
    | SetStatusType

export type AddPostActionType = ReturnType<typeof addPost>
export type UpdateNewPostActionType = ReturnType<typeof updateNewPostText>
export type SetUserProfileType = ReturnType<typeof setUserProfile>
export type SetStatusType = ReturnType<typeof setStatus>

export const addPost = () => ({type: ADD_POST} as const)

export const updateNewPostText = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
} as const)

export const setUserProfile = (profile: ProfileType) => ({
    type: SET_USER_PROFILE,
    profile
} as const)

export const setStatus = (status: string) => ({
    type: SET_STATUS,
    status
} as const)


// thunk

export const showUserProfile = (userId: number) => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ProfileActionsType>) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getStatus= (userId:number) => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ProfileActionsType>) => {
        debugger
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data))
            })
    }
}


export default profileReducer