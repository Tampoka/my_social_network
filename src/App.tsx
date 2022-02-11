import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import store, {AppStateType} from "./redux/redux-store";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"));

class App extends React.Component<AppPropsType> {
    catchAllUnhandledErrors = (promiseRejectionEvent: PromiseRejectionEvent) => {
        alert("Some error occured...")
        console.error(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path="/dialogs" render={() => {
                        return <React.Suspense fallback={<Preloader/>}>
                            <DialogsContainer/>
                        </React.Suspense>
                    }}/>
                        <Route path="/profile/:userId?" render={() => {
                            return <React.Suspense fallback={<Preloader/>}>
                                <ProfileContainer/>
                            </React.Suspense>
                        }}/>
                        <Route path="/users" render={() =>
                            <UsersContainer/>}/>
                        <Route path="/login" render={() =>
                            <Login/>}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                        <Redirect from="/" to="/profile"/>
                        <Route path="*" component={() => <div>404 Not found</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

type MapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    initializeApp: any
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

export const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);


export const MainApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default MainApp