import axios from "axios";
import {UserType} from "../redux/users-reducer";
import {ProfileType} from "../redux/profile-reducer";


type GetUserResponseType = {
    items: UserType[]
    error: string | null
    totalCount: number
}

type FollowResponseType = {
    data: any
    messages: string[]
    fieldsErrors: string[]
    resultCode: 0 | 1
}

type GetProfileResponseType = ProfileType

type AuthMeResponseType = {
    data: {
        id: string | null
        login: string
        email: string
    }
    fieldsErrors: string[]
    messages: string[]
    resultCode: 0 | 1
}

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "73fdf213-e363-4a31-ad92-85b5d437ac0f"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetUserResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<FollowResponseType>(`follow/${userId}`)
            .then(response => response.data)
    },
    unFollow(userId: number) {
        return instance.delete<FollowResponseType>(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<GetProfileResponseType>(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    }
}

export const authAPI = {
    authMe() {
        return instance.get<AuthMeResponseType>(`auth/me`)
            .then(response => response.data)
    }
}