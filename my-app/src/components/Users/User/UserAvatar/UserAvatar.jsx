import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./UserAvatar.module.css";


class UserAvatar extends React.Component{

    render(){
        return(
            <div className={styles.UserAvatar}>
                <NavLink to={`/users/${this.props.id}`}>
                    <img src={`${this.props.AvatarSrc}`} className={styles.UserAvatar_img}/>
                </NavLink>
            </div>
        )
    }
}

export default UserAvatar;
