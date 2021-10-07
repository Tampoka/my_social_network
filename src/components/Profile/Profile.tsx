import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType={
    state:ProfilePageType
}

const Profile:React.FC<ProfilePropsType>=(props)=> {
    return  <div>
       <ProfileInfo/>
       <MyPosts posts={props.state.posts}/>
    </div>
    }

export default Profile