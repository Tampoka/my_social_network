import React from "react";
import s from "./Users.module.css";
import userPhoto from "./../../assets/images/user.png"
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

export type UserPropsType = {
    user: UserType
    followingInProgress: number[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void

}
const User: React.FC<UserPropsType> = ({user, followingInProgress, follow, unFollow}) => {
    return <div key={user.id} className={s.user}>
        <div className={s.avatar}>
            <NavLink to={'/profile/' + user.id}>
                <div className={s.userPhoto}><img src={user.photos.small ? user.photos.small : userPhoto}
                                                  alt="user"/></div>
            </NavLink>
            <div>
                {user.followed
                    ? <button onClick={() => {
                        unFollow(user.id)
                    }}
                              disabled={followingInProgress.some(id => id === user.id)}>
                        UnFollow</button>
                    : <button onClick={() => {
                        follow(user.id)
                    }}
                              disabled={followingInProgress.some(id => id === user.id)}>Follow</button>}
            </div>
        </div>
        <div className={s.userInfo}>
            <div className={s.userName}>{user.name}</div>
            <div className={s.status}>{user.status}</div>
        </div>
        <div className={s.userLocation}>
            <span>{"user.location.country"}</span>
            <span>{"user.location.city"}</span>
        </div>
    </div>

}

export default User