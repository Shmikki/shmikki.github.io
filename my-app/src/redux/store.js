import {combineReducers, createStore} from "redux";
import { profileReducer } from "./profileReducer";
import {dialogReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";

let reducers = combineReducers({
        profilePage : profileReducer,
        DialogsPage : dialogReducer,
        usersPage: usersReducer
    }
);


const store = createStore(reducers);
window.state =  store.getState();
export default store;
