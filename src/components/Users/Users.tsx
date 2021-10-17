import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css";
import axios from "axios";
import userPhoto from "./../../assets/images/user.png"

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

const Users: React.FC<UsersPropsType> = (props: UsersPropsType) => {

    if(props.usersPage.users.length===0){
        debugger
        axios.get<any>("https://social-network.samuraijs.com/api/1.0/users")
            .then(response=>{
                debugger
                props.setUsers(response.data.items)
            })
    }
    return <div className={s.usersContainer}>
        {
            props.usersPage.users.map(u => <div key={u.id} className={s.user}>
                <div className={s.avatar}>
                    <div className={s.userPhoto}><img src={u.photos.small} alt="user"/></div>
                    <div>
                        {u.isFollowing
                            ?<button onClick={()=>props.unFollow(u.id)}>UnFollow</button>
                            :<button onClick={()=>props.follow(u.id)}>Follow</button>}

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
            </div>)
        }
        <button>Show More</button>
    </div>
}

export default Users