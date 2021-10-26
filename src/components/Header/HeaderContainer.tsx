import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                let {id, email, login}=response.data.data
                if(response.data.resultCode===0){
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

type MapStateToPropsType = {}
type MapDispatchToPropsType = {
    setAuthUserData: (userId: null | string, email: null | string, login: null | string) => void
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)