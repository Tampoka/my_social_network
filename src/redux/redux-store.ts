import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import usersReducer from "./users-reducer";

let rootReducer=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer
})

export type AppStateType=ReturnType<typeof rootReducer>
const composeEnhancers = composeWithDevTools


let store=createStore(rootReducer,  composeEnhancers())



export default store