import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, ProfileType, showUserProfile, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = 2
        }
        this.props.showUserProfile(userId)
            this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

type MapStateToPropsType = {
    profile: null | ProfileType
    status: string
}
type MapDispatchToPropsType = {
    showUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}

type MatchParamsType = {
    userId: string
}
export type ProfilePropsType =
    RouteComponentProps<MatchParamsType>
    & MapStateToPropsType
    & MapDispatchToPropsType


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {showUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)
(ProfileContainer)
