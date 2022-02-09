import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";

const Profile: React.FC<ProfilePropsType&{owner:boolean}> = (props) => {

    return <div>
        <ProfileInfo profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
}

export default Profile