import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./UserAvatar.module.css";
import userImage from "../../../../assets/images/user-image.png";

function UserAvatar(props){
    return (
        <div className={styles.UserAvatar}>
            <NavLink to={`/profile/${props.id}`}>
                <img src={props.photos.small ? props.photos.small : userImage}
                     className={styles.UserAvatar_img}/>
            </NavLink>
        </div>
    )

}

export default UserAvatar;
