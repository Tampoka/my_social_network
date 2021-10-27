import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile, showUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if(!userId){
            userId=2
        }
        this.props.showUserProfile(userId)
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
    showUserProfile: (userId:number) => void
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
export default connect(mapStateToProps, {setUserProfile,showUserProfile})(WithUrlDataContainerComponent)