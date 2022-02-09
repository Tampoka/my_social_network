import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import userPhoto from "../../../assets/images/user.png"
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

export type ProfileInfoPropsType = {
    profile: null | ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    saveUserAvatar: (file: File) => void
}
const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatus, isOwner, saveUserAvatar}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onUserAvatarSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            saveUserAvatar(e.target.files[0])
        }
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
                {isOwner && <div>
                    <input type="file" onChange={onUserAvatarSelected}/>
                </div>}
                <ProfileStatusWithHooks status={status}
                                        updateStatus={updateStatus}/>
            </div>
        </div>)
}

export default ProfileInfo