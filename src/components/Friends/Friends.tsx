import React from "react";
import s from "./Friends.module.css"
import {FriendType} from "../../redux/sidebar-reducer";

type FriendsPropsType = {
    friends: FriendType[]
}

const Friends:React.FC<FriendsPropsType> = (props) => {

    const avatar = props.friends.map(f => {
        const activeClass = f.isOnline?s.active:''
        return <div key={f.id}>
            <div className={`${s.avatar} ${activeClass}`}><img src={f.img} alt={"User "+f.name}/></div>
            <div className={s.userName}>{f.name}</div>
        </div>
    })
    return (
        <div>
            <div className={s.avatarContainer}>{avatar}</div>
        </div>
    )
}

export default Friends