import styles from './App.module.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App(props) {
    return (
        <div className={styles.app_wrapper}>
            <Navbar/>
            <Header/>
            <Route path={"/profile/:userID"} render={() =>  <ProfileContainer />}/>
            <Route path={"/users"} render={() => <UsersContainer />}/>
            <Route path={"/dialogs"} render={() => <DialogsContainer />}/>
            <Route path={"/news"} render={() => <News/>}/>
            <Route path={"/music"} render={() => <Music/>}/>
            <Route path={"/settings"} render={() => <Settings/>}/>
        </div>
    );
}

export default App;