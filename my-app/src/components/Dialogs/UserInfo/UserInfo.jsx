import React from "react";
import styles from "./UserInfo.module.css";
import Avatar from "./Avatar/Avatar";
import {NavLink} from "react-router-dom";


class UserInfo extends React.Component {


    render() {
        return (
            <div className={styles.userInfo}>
                <Avatar src={this.props.AvatarURL} alt={this.props.name}/>
                <div className={styles.UserName}>
                    <NavLink to={`/dialogs/${this.props.id}`}>
                        {this.props.name} {this.props.surname}
                    </NavLink>
                </div>
            </div>
        );
    }
}


export default UserInfo;