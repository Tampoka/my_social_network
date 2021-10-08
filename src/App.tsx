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
import {RootStateType, updateNewMessageText} from "./redux/state";

type statePropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage:()=>void
    updateNewMessageText:(newText: string) => void
}
const App: React.FC<statePropsType> = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav state={props.state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}
                                                              addMessage={props.addMessage}
                                                              updateNewMessageText={props.updateNewMessageText}/>}/>
                <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage}
                                                              addPost={props.addPost}
                                                              updateNewPostText={props.updateNewPostText}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Redirect to="/profile"/>
            </div>
        </div>
    );
};

export default App;
