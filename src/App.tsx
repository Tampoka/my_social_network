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

type AppPropsType = {
    posts:Array<PostPropsType>
}
type PostPropsType = {
    id: number
    message: string
    likesCount: number
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/profile" render={() => <Profile posts={props.posts}/>}/>
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
