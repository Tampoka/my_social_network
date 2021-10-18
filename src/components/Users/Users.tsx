import React from "react";
import s from "./Users.module.css";
import userPhoto from "./../../assets/images/user.png"
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";

//
// export type GetUserResponseType={
//     items:UserType[]
//     error:string|null
// }
// export type UserType={
//    name:string
//    id:number
//    photos:{
//        small:string|null|undefined
//        large:string|null|undefined
//    }
//    status:string|null
//     followed:boolean
//     uniqueUrlName:string|null
// }


class Users extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div className={s.usersContainer}>

            <div className={s.users}>
                {pages.map(p => {
                   return <span className={this.props.currentPage === p? s.selectedPage:''}
                   onClick={()=>this.props.setCurrentPage(p)}>{p}</span>
                })}
                {
                    this.props.usersPage.users.map(u => <div key={u.id} className={s.user}>
                            <div className={s.avatar}>
                                <div className={s.userPhoto}><img src={u.photos.small ?u.photos.small :userPhoto} alt="user"/></div>
                                <div>
                                    {u.isFollowing
                                        ? <button onClick={() => this.props.unFollow(u.id)}>UnFollow</button>
                                        : <button onClick={() => this.props.follow(u.id)}>Follow</button>}

                                </div>
                            </div>
                            <div className={s.userInfo}>
                                <div className={s.userName}>{u.name}</div>
                                <div className={s.status}>{u.status}</div>
                            </div>
                            <div className={s.userLocation}>
                                <span>{"u.location.country"}</span>
                                <span>{"u.location.city"}</span>
                            </div>
                        </div>
                    )
                }
            </div>
            <button>Show More</button>
        </div>
    }
}

export default Users