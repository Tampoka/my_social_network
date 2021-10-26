import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if(!userId){
            userId=2
        }

        profileAPI.getProfile(userId)
            .then(data=>{
                this.props.setUserProfile(data)
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
    profile: null | ProfileType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type MatchParamsType = {
    userId: string
}
export type ProfilePropsType =
    RouteComponentProps<MatchParamsType>
    & MapStateToPropsType
    & MapDispatchToPropsType


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})


let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)