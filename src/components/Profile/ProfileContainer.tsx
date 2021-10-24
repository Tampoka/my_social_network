import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType, UserType} from "../../redux/users-reducer";


class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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




let mapStateToProps=(state:AppStateType)=>{
    a:13
}

export default connect (mapStateToProps,{
    setUserProfile
})(ProfileContainer)