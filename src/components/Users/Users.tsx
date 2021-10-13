import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css";


const Users: React.FC<UsersPropsType> = (props: UsersPropsType) => {

    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <div>
                    <div className={s.userPhoto}><img src={u.photoUrl} alt="user"/></div>
                    <div>
                        <button>Follow</button>
                    </div>
                </div>
                <div>
                    <div>{u.fullName}</div>
                    <div>
                        <span>{u.location.country}</span>
                        <span>{u.location.city}</span>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users