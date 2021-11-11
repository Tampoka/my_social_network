import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav />
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() =>
                        <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() =>
                        <ProfileContainer/>}/>
                    <Route path="/users" render={() =>
                        <UsersContainer/>}/>
                    <Route path="/login" render={() =>
                        <Login/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    {/*<Redirect to="/profile"/>*/}
                </div>
            </div>
        );
    }
}

type MapStateToPropsType = {}

type MapDispatchToPropsType = {
    initializeApp:any
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({})

type AppPropsType=MapStateToPropsType&MapDispatchToPropsType

export default compose<React.ComponentType>(
    withRouter,
connect(mapStateToProps, {initializeApp}))(App);
