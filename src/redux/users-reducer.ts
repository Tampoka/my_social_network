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
//
// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
const UsersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {

        default:
            return state
    }
}

export const followAC = () => ({type: 'FOLLOW'})
export const unFollowAC = () => ({type: 'UNFOLLOW'})


export default UsersReducer