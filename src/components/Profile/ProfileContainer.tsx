import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType, UserType} from "../../redux/users-reducer";
import {setUserProfile} from "../../redux/profile-reducer";

export type GetProfileResponseType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ResponseContactsType
    photos: {
        small: string | null | undefined
        large: string | null | undefined
    }
}
export type ResponseContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get<GetProfileResponseType, any>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data.items)

            })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}


type MapStateToPropsType = {
    profile: GetProfileResponseType|null
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: GetProfileResponseType) => void
}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = {
    setUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)