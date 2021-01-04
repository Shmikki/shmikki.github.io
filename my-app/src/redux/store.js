import {combineReducers, createStore} from "redux";
import { profileReducer } from "./profileReducer";
import {dialogReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";

let reducers = combineReducers({
        profilePage : profileReducer,
        DialogsPage : dialogReducer,
        usersPage: usersReducer,
        auth : authReducer
    }
);


const store = createStore(reducers);

export default store;
