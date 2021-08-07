import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

type AppPropsType={
    state:statePropsType
}
type statePropsType = {
    posts: Array<PostPropsType>
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
}
type PostPropsType = {
    id: number
    message: string
    likesCount: number
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
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.dialogs} messages={props.state.messages}/>}/>
                    <Route path="/profile" render={() => <Profile posts={props.state.posts}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Redirect to="/profile"/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
