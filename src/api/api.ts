import axios from "axios";
import {UserType} from "../redux/users-reducer";


type GetUserResponseType = {
    items: UserType[]
    error: string | null
    totalCount: number
}

type FollowResponseType={
    data:any
    messages:string[]
    fieldsErrors:string[]
    resultCode:0|1
}

type AuthMeResponseType={
    data:{
        id:string|null
        login:string
        email:string
    }
    fieldsErrors: string[]
    messages: string[]
    resultCode: 0|1
}
const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "b22dc3a8-54db-4578-99ea-53ac8029e06a"
    }
})

export const usersAPI= {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get<GetUserResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId:number) {
        return instance.post<FollowResponseType>(`follow/${userId}`)
            .then(response => response.data)
    },
    unFollow(userId:number) {
        return instance.delete<FollowResponseType>(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileAPI={
getProfile(){
    instance.get
}
}

export const authAPI={
authMe(){
    return instance.get<AuthMeResponseType>(`auth/me`)
        .then(response=>response.data)
}
}