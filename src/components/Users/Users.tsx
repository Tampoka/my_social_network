import React from "react";
import s from "./Users.module.css";
import userPhoto from "./../../assets/images/user.png"
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {UsersContainerPropsType} from "./UsersContainer";

export type UsersPropsType = {
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
}
const Users: React.FC<UsersContainerPropsType & UsersPropsType> = (props) => {

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
                            <NavLink to={'/profile/' + u.id}>
                                <div className={s.userPhoto}><img src={u.photos.small ? u.photos.small : userPhoto}
                                                                  alt="user"/></div>
                            </NavLink>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                     /*   props.toggleFollowingProgress(true, u.id)
                                        usersAPI.unFollow(u.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unFollow(u.id)
                                                }
                                                props.toggleFollowingProgress(false, u.id)
                                            })*/
                                        props.unFollow(u.id)
                                    }}
                                              disabled={props.followingInProgress.some(id => id === u.id)}>UnFollow</button>
                                    : <button onClick={() => {/*
                                        props.toggleFollowingProgress(true, u.id)
                                        usersAPI.follow(u.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                                props.toggleFollowingProgress(false, u.id)
                                            })*/
                                        props.follow(u.id)
                                    }}
                                              disabled={props.followingInProgress.some(id => id === u.id)}>Follow</button>}

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