import {InjectedFormProps, reduxForm} from "redux-form"
import {ProfileType} from "../../../redux/profile-reducer"
import {createField, Input, Textarea} from "../../FormControls/FormControls"

type ProfileDataFormPropsType =  {
    profile: ProfileType
}
const ProfileDataForm:React.FC<ProfileDataFormPropsType&InjectedFormProps<ProfileDataFormPropsType>> = (props:any) => {
    return (
        <form>
            <div><b>Full Name</b>: {createField("Full name", "fullName", Input, [], {type: "text"})}</div>
            <div><b>Looking for a Job</b>: {createField("", "lookingForAJob", Input, [], {type: "checkbox"})}</div>
            <div><b>My professional skills</b>: {props.profile.lookingForAJobDescription}
                {createField("My proffessional skills", "lookingForAJobDescription", Textarea, [])}</div>
            <div><b>About me</b>: {createField(" About me", "aboutMe", Textarea, [])}</div>
            {/*<div><b>Contacts</b>: {Object.keys(profile.contacts).map(c => {*/}
            {/*    //@ts-ignore*/}
            {/*    return <Contact contactTitle={c} contactValue={profile.contacts[c]} key={c}/>*/}
            {/*})}</div>*/}
            <div>
                <button>Save</button>
            </div>
        </form>
    )
}



export default reduxForm<{},ProfileDataFormPropsType>({
    form: 'edit-profile',
    //@ts-ignore
})(ProfileDataForm)

