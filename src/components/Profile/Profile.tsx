import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";
import {Redirect} from "react-router-dom";

const Profile: React.FC<ProfilePropsType> = (props) => {

    if (!props.isAuth) return <Redirect to={"/login"}/>;
    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
    </div>
}

export default Profile