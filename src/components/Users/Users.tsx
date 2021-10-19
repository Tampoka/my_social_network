import React from "react";
import s from "./Users.module.css";
import userPhoto from "./../../assets/images/user.png"
import {UserType} from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";

export type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}
const Users: React.FC<UsersPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={s.usersContainer}>
        <div className={s.users}>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={() => props.onPageChanged(p)}>{p}</span>
            })}
            {
                props.users.map(u => <div key={u.id} className={s.user}>
                        <div className={s.avatar}>
                            <NavLink to={'/profile/'+u.id}>
                                <div className={s.userPhoto}><img src={u.photos.small ? u.photos.small : userPhoto}
                                                                  alt="user"/></div>
                            </NavLink>
                            <div>
                                {u.isFollowing
                                    ? <button onClick={() => props.unFollow(u.id)}>UnFollow</button>
                                    : <button onClick={() => props.follow(u.id)}>Follow</button>}

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

export default Users