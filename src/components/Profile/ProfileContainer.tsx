import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, showUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

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
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent=(props:any)=>{
    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return <ProfileContainer {...props}/>
}

type MapStateToPropsType = {
    profile: null | ProfileType
    isAuth:boolean
}
type MapDispatchToPropsType = {
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
    profile: state.profilePage.profile,
    isAuth:state.auth.isAuth
})


let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {showUserProfile})(WithUrlDataContainerComponent)