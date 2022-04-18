import { createStore } from "redux";
import { combineReducers } from "redux"
import ProfileReducer from './ProfileReducer'
import MessageReducer from './MessageReducer'
import ProfileDataReducer from './ProfileDataReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import UsersReducer from "./UsersReducer";
import AuthReducer from './AuthReducer'
let reducers = combineReducers({

    profilePage: ProfileReducer,
    messagesPage: MessageReducer,
    profileData: ProfileDataReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
})

let store = createStore(reducers, composeWithDevTools());

window.store = store

export default store