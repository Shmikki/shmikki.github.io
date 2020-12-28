import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./UserPost.module.css";


class UserPost extends React.Component {


    render() {
        return (
                <div className={styles.user}>
                    <NavLink to={"/profile"}>
                    <div className={styles.userAvatar}><img src={this.props.src} alt="ava"/> </div>
                    </NavLink>
                    <NavLink to={"/profile"} className={styles.userLink}>
                    <styles className="userName">Ivan Ihnatsiuk</styles>
                    </NavLink>
                </div>
        )
    }
}

export default UserPost;