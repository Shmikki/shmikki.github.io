import React from 'react';
import styles from "./Users.module.css";
import User from "./User/User";
import axios from "axios";


class Users extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        return(
            <div className={styles.content}>
                {this.props.usersPage.users.map(user => <User user={user} changeFollow={this.props.changeFollow} /> ) }
            </div>
        );
    }
}

export default Users;