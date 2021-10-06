import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType={
    state:statePropsType
}
type statePropsType= {
    posts:PostPropsType[]
}
type PostPropsType={
    id:number
    message:string
    likesCount:number
}
const Profile=(props:ProfilePropsType)=> {
    return  <div>
       <ProfileInfo/>
       <MyPosts posts={props.state.posts}/>
    </div>
    }

export default Profile