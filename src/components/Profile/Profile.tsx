import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/store";
import {ActionsType} from "../../redux/profile-reducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch:(action:ActionsType)=>void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer posts={props.profilePage.posts}
                 dispatch={props.dispatch}
                 newPostText={props.profilePage.newPostText}/>
    </div>
}

export default Profile