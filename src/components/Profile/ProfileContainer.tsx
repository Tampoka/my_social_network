import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, ProfileType, getUserProfile, updateStatus, savePhoto,saveProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import { FormDataType } from "./ProfileInfo/ProfileInfo";

class ProfileContainer extends React.Component<ProfilePropsType> {
    refreshProfile() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = Number(this.props.authorizedUserId)
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        console.log("render Profile")
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     isOwner={!this.props.match.params.userId}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}/>
        )
    }
}

type MapStateToPropsType = {
    profile: null | ProfileType
    status: string
    authorizedUserId: string | null,
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (photo: File) => void
    saveProfile: (data: FormDataType) => void
}

type MatchParamsType = {
    userId: string
}
export type ProfilePropsType =
    RouteComponentProps<MatchParamsType>
    & MapStateToPropsType
    & MapDispatchToPropsType


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    console.log("mstp ProfileContainer")
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto,saveProfile}),
    withRouter,
    // withAuthRedirect
)
(ProfileContainer)
