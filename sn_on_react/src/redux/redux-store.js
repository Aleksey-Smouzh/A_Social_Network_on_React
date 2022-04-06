import { createStore } from "redux";
import { combineReducers } from "redux"
import ProfileReducer from './ProfileReducer'
import MessageReducer from './MessageReducer'
import ProfileDataReducer from './ProfileDataReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({

    profilePage: ProfileReducer,
    messagesPage: MessageReducer,
    profileData: ProfileDataReducer,
    usersPage: UsersReducer

})

let store = createStore(reducers, composeWithDevTools());

window.store = store

export default store