import React from "react";
import axios from "axios";
import {UsersApiComponentPropsType} from "./UsersContainer";
import Users from "./Users";


// export type GetUserResponseType = {
//     items: ResponseUserType[]
//     error: string | null
//     totalCount: number
// }
// export type ResponseUserType = {
//     name: string
//     id: number
//     photos: {
//         small: string | null | undefined
//         large: string | null | undefined
//     }
//     status: string | null
//     followed: boolean
//     uniqueUrlName: string | null
// }


class UsersApiComponent extends React.Component<UsersApiComponentPropsType, any> {
    componentDidMount() {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)

            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.usersPage.users}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
        />
    }
}

export default UsersApiComponent