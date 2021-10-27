import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
      /*  authAPI.authMe().then(data => {
            let {id, email, login} = data.data
            if (data.resultCode === 0) {
                this.props.setAuthUserData(id, email, login)
            }
        })*/
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
    setAuthUserData: (userId: null | string, email: null | string, login: null | string) => void
    getAuth:()=>void
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

export default connect(mapStateToProps, {setAuthUserData,getAuth})(HeaderContainer)