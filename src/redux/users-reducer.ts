import {usersAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk"
import {AppStateType} from "./redux-store";

export type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type UserType = {
    id: number
    name: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
    location: LocationType
}

export type LocationType = {
    city: string
    country: string
}

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

const initialState = {
    users: [
        /* {
             id: 1,
             fullName: "Kate",
             photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dMYMr1CCTycSQd2YQatl4bvzK5T90Renlw&usqp=CAU",
             status: "I am looking for new job",
             followed: true,
             location: {city: "New York", country: "USA"}
         },
         {
             id: 2,
             fullName: "John",
             photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wvbPOt0gK-5yGATP1Beo7Mkk7LT1M6KZLw&usqp=CAU",
             status: "I am moved to new office",
             followed: true,
             location: {city: "London", country: "Great Britain"}
         },
         {
             id: 3,
             fullName: "Bob",
             photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz8f-cdfPQtfH1EP3x1V2pMDyLpDMmuzKbg&usqp=CAU",
             status: "Happiest ever",
             followed: false,
             location: {city: "Melbourne", country: "Australia"}
         },*/
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [20416]

}
const usersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export  type UsersActionsType =
    FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType
    | ToggleFollowingProgress

export type FollowActionType = ReturnType<typeof acceptFollow>
export type UnFollowActionType = ReturnType<typeof acceptUnFollow>
export type SetUsersActionType = ReturnType<typeof setUsers>
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export type ToggleFollowingProgress = ReturnType<typeof toggleFollowingProgress>

export const acceptFollow = (userId: number) => ({type: FOLLOW, userId} as const)
export const acceptUnFollow = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (pageNumber: number) => ({type: SET_CURRENT_PAGE, pageNumber} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)


//thunk
export const getUsers = (currentPage:number, pageSize:number) => {
    return (dispatch:ThunkDispatch<AppStateType, unknown, UsersActionsType>) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                // dispatch(setTotalUsersCount(data.totalCount))
                dispatch(setTotalUsersCount(300))
            })
    }
}

export const unFollow = (userId:number) => {
    return (dispatch:ThunkDispatch<AppStateType, unknown, UsersActionsType>) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(acceptUnFollow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const follow = (userId:number) => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, UsersActionsType>) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(acceptFollow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}



export default usersReducer