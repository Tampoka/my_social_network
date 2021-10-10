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
import StoreType from "./redux/redux-store";

type AppPropsType = {
  store:StoreType
}
const App: React.FC<AppPropsType> = (props) => {
    const state=props.store.getState()
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav state={state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() =>
                    <Dialogs state={state.dialogsPage}
                             dispatch={props.store.dispatch}/>}/>
                <Route path="/profile" render={() =>
                    <Profile store={props.store}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Redirect to="/profile"/>
            </div>
        </div>
    );
};

export default App;
