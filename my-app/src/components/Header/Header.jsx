import Navbar from "../Navbar/Navbar";
import Logo from "./images/logo.png"
import styles from "./Header.module.css"
import Search from "./Search/Search";
import {NavLink} from "react-router-dom";
import React from "react"


class Header extends React.Component{
    render(){
        return(
        <header className={styles.header}>
            <div className={styles.header__content}>
            <div className={styles.logo}>
                <NavLink  to="/profile"> <img src={Logo} alt="logo" className={styles.logo_image} /> </NavLink>
            </div>
            <Search />
            </div>
        </header>
        );
    }
}

export default Header;