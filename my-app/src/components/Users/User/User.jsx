import React from "react";
import styles from "./User.module.css";
import UserAvatar from "./UserAvatar/UserAvatar";

class User extends React.Component{

    constructor(props) {
        super(props);
        this.onChangeFollow = this.onChangeFollow.bind(this);
    }

    onChangeFollow(){
        this.props.changeFollow(this.props.user.id);
    }



    render(){
        return(
            <div className={styles.info}>
                <UserAvatar id={this.props.user.id} photos={this.props.user}/>
                <div className={styles.UserContent}>
                    <div className={styles.name}>
                    <span>
                        {this.props.user.name}
                    </span>
                    </div>
                    <div className={styles.message}>
                        <span>Write message</span>
                    </div>
                    { this.props.user.followed ?
                        <button onClick={() => this.onChangeFollow()}>followed</button>
                        :
                        <button onClick={() => this.onChangeFollow()}>unfollowed</button>
                    }
                </div>
            </div>
        );
    }
}

export default User;