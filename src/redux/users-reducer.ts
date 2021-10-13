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
        return state
        case UNFOLLOW:
            return state
        default:
            return state
    }
}

export  type ActionsType=FollowActionType|UnFollowActionType
export type FollowActionType=ReturnType<typeof followAC>
export type UnFollowActionType=ReturnType<typeof unFollowAC>
export const followAC = (id:number) => ({type: FOLLOW,
userId:id})
export const unFollowAC = (id:number) => ({type: UNFOLLOW,userId:id})


export default UsersReducer