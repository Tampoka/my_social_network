import axios from "axios";


export type GetUserResponseType = {
    items: ResponseUserType[]
    error: string | null
    totalCount: number
}
export type ResponseUserType = {
    name: string
    id: number
    photos: {
        small: string | null | undefined
        large: string | null | undefined
    }
    status: string | null
    followed: boolean
    uniqueUrlName: string | null
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
        return instance.get<GetUserResponseType, any>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}
