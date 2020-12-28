import React from 'react';
import styles from "./Users.module.css";
import User from "./User/User";


class Users extends React.Component{


    render() {
        return(
            <div className={styles.Users}>
                {this.props.usersPage.users.map(user => <User user={user} changeFollow={this.props.changeFollow} /> ) }
            </div>
        );
    }
}

export default Users;