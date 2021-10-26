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


export const getUsers=(currentPage=1,pageSize=10)=>{
    return axios.get<GetUserResponseType,any>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true
        })
}