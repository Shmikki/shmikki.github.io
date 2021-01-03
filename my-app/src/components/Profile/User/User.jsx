import styles from "./User.module.css"
import React from "react";


class User extends React.Component {
    render() {
        return (
            <div className={styles.profile}>
                <div className={styles.avatar}>
                    <img src="" alt="ava"/>
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>{this.props.fullName}</div>
                </div>
            </div>
        );
    }
}

export default User;