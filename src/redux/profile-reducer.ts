import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {profileAPI} from "../api/api";
import {FormDataType} from "../components/Profile/ProfileInfo/ProfileInfo";
import {FormAction, stopSubmit} from 'redux-form';

export type InitialStateType = {
    posts: PostType[]
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
const ADD_POST = "/profile/ADD-POST";
const SET_USER_PROFILE = "/profile/SET-USER-PROFILE";
const SET_STATUS = "/profile/SET-STATUS";
const DELETE_POST = "/profile/DELETE-POST";
const SAVE_PHOTO_SUCCESS = "profile/SAVE-PHOTO-SUCCESS"

const initialState = {
    posts: [
        {id: 1, message: "How are you?", likesCount: 19},
        {id: 2, message: "Where have you been?", likesCount: 3},
        {id: 3, message: "Pics from our party yesterday", likesCount: 8},
        {id: 4, message: "How important is to be proactive?", likesCount: 27},
        {id: 5, message: "What are your goals for today, for this week?", likesCount: 54},
    ],
    profile: null,
    status: ''
}
const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 6,
                message: action.text,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }

        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts].filter(p => p.id !== action.postId)
            }

        case SET_USER_PROFILE:
            return {
                ...state, profile: {...state.profile, ...action.profile}
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:

            return {
                ...state,
                // @ts-ignore
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            }
        default:
            return state
    }
}

export type ProfileActionsType =
    AddPostActionType
    | SetUserProfileActionType
    | SetStatusActionType
    | DeletePostActionType
    | SavePhotoSuccessActionType

export type AddPostActionType = ReturnType<typeof addPost>
export type DeletePostActionType = ReturnType<typeof deletePost>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type SetStatusActionType = ReturnType<typeof setStatus>
export type SavePhotoSuccessActionType = ReturnType<typeof savePhotoSuccess>

export const addPost = (text: string) => ({type: ADD_POST, text} as const)

export const deletePost = (postId: number) => ({type: DELETE_POST, postId} as const)

export const savePhotoSuccess = (photos: { small: string, large: string }) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
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

export const getUserProfile = (userId: number) =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, ProfileActionsType>) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response))
    }

export const getStatus = (userId: number) =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, ProfileActionsType>) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response))
    }

export const updateStatus = (status: string) =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, ProfileActionsType>) => {
        let response = await profileAPI.updateStatus(status)
        if (response.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }

export const savePhoto = (photo: File) =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, ProfileActionsType>) => {
        let response = await profileAPI.savePhoto(photo)
        if (response.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.photos))
        }
    }

export const saveProfile = (profile: FormDataType) =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, FormAction>, getState: () => AppStateType) => {
        const userId = Number(getState().auth.userId)
        let response = await profileAPI.updateProfile(profile)
        if (response.resultCode === 0) {
           await  dispatch(getUserProfile(userId))
        } else {
            const message = response.messages.length > 0 ? response.messages[0] : "Some error"
            dispatch(stopSubmit("edit-profile", {_error: message}))
            // dispatch(stopSubmit("edit-profile", {"contacts": {"facebook":message}}))
            return Promise.reject(message)
        }
    }

export default profileReducer