import axios from "axios";
import {UserType} from "../redux/users-reducer";
import {ProfileType} from "../redux/profile-reducer";
import {FormDataType} from "../components/Profile/ProfileInfo/ProfileInfo";


type GetUserResponseType = {
    items: UserType[]
    error: string | null
    totalCount: number
}

type GetProfileResponseType = ProfileType

type AuthMeResponseType = {
    data: {
        id: string | null
        login: string
        email: string
    }
    messages: string[]
    resultCode: 0 | 1
}

type CommonResponseType = {
    data: any
    messages: string[]
    resultCode: 0 | 1 | 10
}

type CaptchaResponseType = {
    url: string
}

type UpdateProfileType = CommonResponseType & {
    fieldsErrors: string[]
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
        return instance.post<CommonResponseType>(`follow/${userId}`)
            .then(response => response.data)
    },
    unFollow(userId: number) {
        return instance.delete<CommonResponseType>(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<GetProfileResponseType>(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put<UpdateProfileType>(`profile/status`, {status: status})
            .then(response => response.data)
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<CommonResponseType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    },
    updateProfile(data: FormDataType) {
        return instance.put<CommonResponseType>(`profile`, data)
            .then(response => response.data)
    },

}

export const authAPI = {
    authMe() {
        return instance.get<AuthMeResponseType>(`auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean = false,captcha=null) {
        return instance.post<CommonResponseType>(`auth/login`, {email, password, rememberMe,captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete<CommonResponseType>(`auth/login`)
            .then(response => response.data)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<CaptchaResponseType>(`security/get-captcha-url`)
        // .then(response => response.data)
    }
}