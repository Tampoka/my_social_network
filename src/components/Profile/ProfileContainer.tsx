import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get<ProfileContainerPropsType, any>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)

            })
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     setUserProfile={this.props.setUserProfile}
            />
        )
    }
}


type MapStateToPropsType = {
    profile: null|ProfileType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (state: AppStateType): MapStateToPropsType =>({
        profile: state.profilePage.profile
    })



export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)