import React from "react";
import s from "./Friends.module.css"

type FriendsPropsType = {
    state: statePropsType
}
type statePropsType = {
    friends: FriendPropsType[]
}
type FriendPropsType = {
    id: number
    name: string
    img: string
    isOnline: boolean
}
const Friends = (props: FriendsPropsType) => {
    let avatar = props.state.friends.map(f => <div key={f.id} >
        <div className={s.avatar}><img src={f.img}/></div>
        <div className={s.userName}>{f.name}</div>
    </div>)
    return (
        <div>
            <div className={s.avatarContainer}>{avatar}</div>
        </div>
    )
}

export default Friends