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

    const avatar = props.state.friends.map(f => {
        const activeClass = f.isOnline?s.active:''
        return <div key={f.id}>
            <div className={`${s.avatar} ${activeClass}`}><img src={f.img}/></div>
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