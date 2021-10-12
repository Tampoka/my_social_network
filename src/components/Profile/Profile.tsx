import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {

}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer />
    </div>
}

export default Profile