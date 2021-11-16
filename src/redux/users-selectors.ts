import { createSelector } from "reselect";
import {AppStateType} from "./redux-store";
import {UserType} from "./users-reducer";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}

export const getUsersSelector = createSelector(getUsers, (users: Array<UserType>) => {
    debugger
    return users.filter((u: UserType) => true)
})
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}