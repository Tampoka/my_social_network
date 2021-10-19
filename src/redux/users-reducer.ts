export type InitialStateType = {
    users: UserType[]
    pageSize:number
    totalUsersCount:number
    currentPage:number
}

export type UserType = {
    id: number
    name: string
    photos: {
        small:string
        large:string
    }
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
const SET_USERS="SET-USERS";
const SET_CURRENT_PAGE="SET-CURRENT-PAGE";

const initialState = {
    users: [
        // {
        //     id: 1,
        //     fullName: "Kate",
        //     photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dMYMr1CCTycSQd2YQatl4bvzK5T90Renlw&usqp=CAU",
        //     status: "I am looking for new job",
        //     isFollowing: true,
        //     location: {city: "New York", country: "USA"}
        // },
        // {
        //     id: 2,
        //     fullName: "John",
        //     photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wvbPOt0gK-5yGATP1Beo7Mkk7LT1M6KZLw&usqp=CAU",
        //     status: "I am moved to new office",
        //     isFollowing: true,
        //     location: {city: "London", country: "Great Britain"}
        // },
        // {
        //     id: 3,
        //     fullName: "Bob",
        //     photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz8f-cdfPQtfH1EP3x1V2pMDyLpDMmuzKbg&usqp=CAU",
        //     status: "Happiest ever",
        //     isFollowing: false,
        //     location: {city: "Melbourne", country: "Australia"}
        // },
    ],
    pageSize:10,
    totalUsersCount:21,
    currentPage:2
}
const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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
                        return {...u, isFollowing: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state,users:action.users}
        case SET_CURRENT_PAGE:
            return {...state,
            currentPage:action.pageNumber}
        default:
            return state
    }
}

export  type ActionsType = FollowActionType | UnFollowActionType|SetUsersActionType|setCurrentPageActionType

export type FollowActionType = ReturnType<typeof followAC>
export type UnFollowActionType = ReturnType<typeof unFollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>

export const followAC = (userId: number) => ({type: FOLLOW, userId}as const)
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId}as const)
export const setUsersAC = (users:UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (pageNumber:number) => ({type: SET_CURRENT_PAGE, pageNumber} as const)


export default usersReducer