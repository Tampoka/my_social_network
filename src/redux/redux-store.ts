import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk"
import appReducer from "./app-reducer";
import chatReducer from './chat-reducer';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form:formReducer,
    app:appReducer,
    chat:chatReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

const middlewareEnhancer = applyMiddleware(thunkMiddleware)
const composedEnhancers = composeWithDevTools(middlewareEnhancer)

let store = createStore(rootReducer, composedEnhancers)


// @ts-ignore
window.store = store

export default store