import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import userPhoto from "../../../assets/images/user.png"
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus";

export type ProfileInfoPropsType = {
    profile: null | ProfileType
}
const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile}) => {
    if(!profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src="https://s27389.pcdn.co/wp-content/uploads/2019/12/why-network-segmentation-essential-enterprise-1024x440.jpeg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar}
                     src={profile.photos.large ? profile.photos.large : userPhoto}
                     alt={"User avatar" + profile.fullName}/>
                <ProfileStatus/>
            </div>
        </div>)
}

export default ProfileInfo