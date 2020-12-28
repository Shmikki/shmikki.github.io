import styles from "./User.module.css"
import React from "react";


class User extends React.Component {
    render() {
        return (
            <div className={styles.profile}>
                <div className={styles.avatar}>
                    <img src={this.props.src_avatar} alt="ava"/>
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>{this.props.name}</div>
                    <div className={styles.birthday}>{this.props.birthday}</div>
                    <div className={styles.city}>{this.props.city}</div>
                    <div className={styles.education}>{this.props.education}</div>
                </div>
            </div>
        );
    }
}

export default User;