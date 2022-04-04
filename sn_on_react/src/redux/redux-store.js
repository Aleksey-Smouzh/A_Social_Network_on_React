import { createStore } from "redux";
import { combineReducers } from "redux"
import ProfileReducer from './ProfileReducer'
import MessageReducer from './MessageReducer'
import ProfileDataReducer from './ProfileDataReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({

    profilePage: ProfileReducer,
    messagesPage: MessageReducer,
    profileData: ProfileDataReducer,

})

let store = createStore(reducers, composeWithDevTools());

window.store = store

export default store