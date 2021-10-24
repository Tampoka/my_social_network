import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

type AppPropsType = {
store:any
}
const App: React.FC<AppPropsType> = (props) => {
    const state=props.store.getState()
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav state={state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() =>
                    <DialogsContainer />}/>
                <Route path="/profile/:userId" render={() =>
                    <ProfileContainer />}/>
                <Route path="/users" render={() =>
                    <UsersContainer />}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                {/*<Redirect to="/profile"/>*/}
            </div>
        </div>
    );
};

export default App;
