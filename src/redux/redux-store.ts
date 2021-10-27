import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let rootReducer=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer
})

export type AppStateType=ReturnType<typeof rootReducer>
const composeEnhancers = composeWithDevTools


let store=createStore(rootReducer, applyMiddleware(thunkMiddleware,composeEnhancers()))


// @ts-ignore
window.store=store

export default store