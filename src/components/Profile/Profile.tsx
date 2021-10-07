import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType={
    state:ProfilePageType
    addPost:(postMessage:string)=>void
}

const Profile:React.FC<ProfilePropsType>=(props)=> {
    return  <div>
       <ProfileInfo/>
       <MyPosts posts={props.state.posts} addPostCallback={props.addPost}/>
    </div>
    }

export default Profile