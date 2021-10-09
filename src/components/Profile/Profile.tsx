import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/store";
import {ActionsType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch:(action:ActionsType)=>void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 dispatch={props.dispatch}
                 newPostText={props.profilePage.newPostText}/>
    </div>
}

export default Profile