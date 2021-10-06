import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Redirect, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

type AppPropsType = {
    state: statePropsType
}
type statePropsType = {
    dialogsPage: dialogsPropsType
    profilePage: profilePropsType
    sidebar:sidebarPropsType
}

type sidebarPropsType={
    friends:FriendPropsType[]
}

type FriendPropsType={
    id:number
    name:string
    img:string
    isOnline:boolean
}
type profilePropsType = {
    posts: PostPropsType[]
}
type PostPropsType = {
    id: number
    message: string
    likesCount: number
}
type dialogsPropsType = {
    dialogs: DialogPropsType[]
    messages: MessagePropsType[]
}
type DialogPropsType = {
    id: number
    name: string
}
type MessagePropsType = {
    id: number
    message: string
}

const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav state={props.state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path="/profile" render={() => <Profile state={props.state.profilePage}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Redirect to="/profile"/>
            </div>
        </div>
    );
};

export default App;
