import React from "react";
import {UsersPropsType} from "./UsersContainer";


const Users: React.FC<UsersPropsType> = (props: UsersPropsType) => {

    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <div>
                    <div><img src="" alt=""/></div>
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