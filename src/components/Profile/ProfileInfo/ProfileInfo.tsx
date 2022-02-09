import React, {ChangeEvent, useState} from "react";
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
    const [editMode, setEditMode] = useState<boolean>(false)
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
                {isOwner && <div><input type="file" onChange={onUserAvatarSelected}/></div>}
                {editMode ? <ProfileDataForm profile={profile}/> : <ProfileData profile={profile} isOwner={isOwner}/>}
                <ProfileStatusWithHooks status={status}
                                        updateStatus={updateStatus}/>
            </div>
        </div>)
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner?:boolean
}
const ProfileData = ({profile,isOwner}: ProfileDataPropsType) => {
    return (
        <div>
            <div><button>Edit</button></div>
            <div><b>Full Name</b>: {profile.fullName}</div>
            <div><b>Looking for a Job</b>: {profile.lookingForAJob ? "yes" : "no"}</div>
            {profile.lookingForAJob &&
            <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>
            }
            <div><b>Contacts</b>: {Object.keys(profile.contacts).map(c => {
                //@ts-ignore
                return <Contact contactTitle={c} contactValue={profile.contacts[c]} key={c}/>
            })}</div>
        </div>
    )
}
const ProfileDataForm = ({profile,isOwner=false}: ProfileDataPropsType) => {
    return (
        <div>
            <div><b>Full Name</b>: {profile.fullName}</div>
            <div><b>Looking for a Job</b>: {profile.lookingForAJob ? "yes" : "no"}</div>
            {profile.lookingForAJob &&
            <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>
            }
            <div><b>Contacts</b>: {Object.keys(profile.contacts).map(c => {
                //@ts-ignore
                return <Contact contactTitle={c} contactValue={profile.contacts[c]} key={c}/>
            })}</div>
        </div>
    )
}
type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}
const Contact = ({contactTitle, contactValue}: ContactsPropsType) => {
    return <div><b>{contactTitle}</b> {contactValue}</div>
}
export default ProfileInfo