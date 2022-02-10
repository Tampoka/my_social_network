import {InjectedFormProps, reduxForm} from "redux-form"
import {ProfileType} from "../../../redux/profile-reducer"
import {createField, Input, Textarea} from "../../FormControls/FormControls"
import {FormDataType} from "./ProfileInfo"
import React from 'react';
import s from "./ProfiledataForm.module.css"

type ProfileDataFormPropsType = {
    profile: ProfileType
}
const ProfileDataForm: React.FC<InjectedFormProps<FormDataType> & ProfileDataFormPropsType> = ({
                                                                                                   handleSubmit,
                                                                                                   profile,
                                                                                                   error
                                                                                               }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><b>Full Name</b>: {createField("Full name", "fullName", Input, [], {type: "text"})}</div>
            <div><b>Looking for a Job</b>: {createField("", "lookingForAJob", Input, [], {type: "checkbox"})}</div>
            <div><b>My professional skills</b>:
                {createField("My professional skills", "lookingForAJobDescription", Textarea, [])}</div>
            <div><b>About me</b>: {createField(" About me", "aboutMe", Textarea, [])}</div>
            <div><b>Contacts</b>: {Object.keys(profile.contacts).map(c => {
                return <div className={s.contacts} key={c}>
                    <b>{c}: {createField(c + " url", "contacts." + c, Input, [], {type: "text"})}</b>
                </div>
            })}</div>
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <button disabled={!!error}>Save</button>
            </div>
        </form>
    )
}


export default reduxForm<FormDataType, ProfileDataFormPropsType>({
    form: 'edit-profile',
    //@ts-ignore
})(ProfileDataForm)

