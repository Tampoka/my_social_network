import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, logout, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.getAuth()
    }

    render() {
        return <Header {...this.props}/>
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: null | string
}
type MapDispatchToPropsType = {
    setAuthUserData: (userId: null | string, email: null | string, login: null | string,isAuth:boolean) => void
    getAuth:()=>void
    logout:()=>void
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

export default connect(mapStateToProps, {setAuthUserData,getAuth,logout})(HeaderContainer)