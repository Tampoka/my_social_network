export type InitialStateType = {
    users: UserType[]
}

export type UserType = {
    id: number
    fullName: string
    status: string
    isFollowing: boolean
    location: LocationType
}

export type LocationType = {
    city: string
    country: string
}

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS="SET-USERS"

const initialState = {
    users: [
        {
            id: 1,
            fullName: "Kate",
            status: "I am looking for new job",
            isFollowing: true,
            location: {city: "New York", country: "USA"}
        },
        {
            id: 2,
            fullName: "John",
            status: "I am moved to new office",
            isFollowing: true,
            location: {city: "London", country: "Great Britain"}
        },
        {
            id: 3,
            fullName: "Bob",
            status: "Happiest ever",
            isFollowing: false,
            location: {city: "Melbourne", country: "Australia"}
        },
    ]
}
const UsersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFollowing: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFollowing: true}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state,users:[...state.users,...action.users]}
        default:
            return state
    }
}

export  type ActionsType = FollowActionType | UnFollowActionType|SetUsersActionType

export type FollowActionType = ReturnType<typeof followAC>
export type UnFollowActionType = ReturnType<typeof unFollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => ({type: FOLLOW, userId}as const)
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId}as const)
export const setUsersAC = (users:UserType[]) => ({type: SET_USERS, users} as const)


export default UsersReducer