import React from "react";

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
    let avatar = props.state.friends.map(f => <div key={f.id} className={"avatar"}>
        <img src={f.img}/>
        <span>{f.name}</span>
    </div>)
    return (
        <div>
            <div className={"avatarContainer"}>{avatar}</div>
        </div>
    )
}

export default Friends