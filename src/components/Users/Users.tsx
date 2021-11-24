import React from "react";
import s from "./Users.module.css";
import userPhoto from "./../../assets/images/user.png"
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {UsersContainerPropsType} from "./UsersContainer";
import Paginator from "../../common/Paginator/Paginator";

export type UsersPropsType = {
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
}
const Users: React.FC<UsersContainerPropsType & UsersPropsType> = ({
                                                                       currentPage,
                                                                       pageSize,
                                                                       onPageChanged,
                                                                       totalUsersCount,
                                                                       ...props
                                                                   }) => {
    return <div className={s.usersContainer}>
        <div className={s.users}>
            <Paginator onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}
                       currentPage={currentPage}/>
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
                                        props.unFollow(u.id)
                                    }}
                                              disabled={props.followingInProgress.some(id => id === u.id)}>
                                        UnFollow</button>
                                    : <button onClick={() => {
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