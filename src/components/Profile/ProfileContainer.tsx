import React from "react";
import Profile from "./Profile";


class ProfileContainer extends React.Component<any, any> {
    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

export default ProfileContainer