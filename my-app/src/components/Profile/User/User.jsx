import styles from "./User.module.css"
import React from "react";
import UserAvatar from "./UserAvatar/UserAvatar";


function User(props) {
    return (
        <div className={styles.profile}>
            <UserAvatar id={props.profile.userId} photos={props.profile.photos}/>
            <div className={styles.info}>
                <div className={styles.name}>{props.profile.fullName}</div>
            </div>
        </div>
    );
}

export default User;