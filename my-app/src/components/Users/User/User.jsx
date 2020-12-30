import React from "react";
import styles from "./User.module.css";
import UserAvatar from "./UserAvatar/UserAvatar";

class User extends React.Component{

    constructor(props) {
        super(props);
        this.id = this.props.user.id;
    }

    onChangeFollow(id){
        this.props.changeFollow(id);
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
                        <button onClick={() => this.onChangeFollow(this.id)}>followed</button>
                        :
                        <button onClick={() => this.onChangeFollow(this.id)}>unfollowed</button>
                    }
                </div>
            </div>
        );
    }
}

export default User;