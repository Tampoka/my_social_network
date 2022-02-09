import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";

const Profile: React.FC<ProfilePropsType & { isOwner: boolean }> = (props) => {

    return <div>
        <ProfileInfo profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}
                     isOwner={props.isOwner}
                     saveUserAvatar={props.savePhoto}/>
        <MyPostsContainer/>
    </div>
}

export default Profile