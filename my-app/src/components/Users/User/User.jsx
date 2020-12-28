import React from "react";
import styles from "./User.module.css";
import UserAvatar from "./UserAvatar/UserAvatar";

class User extends React.Component{

    constructor(props) {
        super(props);
        this.id = this.props.user.id;
    }

    followed(follow){
        return (follow ?
            <button onClick={() => this.onChangeFollow(this.id)}>followed</button>
            :
            <button onClick={() => this.onChangeFollow(this.id)}>unfollowed</button>);
    }

    onChangeFollow(id){
        this.props.changeFollow(id);
    }

    render(){
        return(
            <div className={styles.User}>
                <UserAvatar id={this.props.user.id} AvatarSrc={this.props.user.AvatarSrc}/>
                <div className={styles.UserContent}>
                    <div className={styles.UserName}>
                    <span>
                        {this.props.user.firstName} {this.props.user.lastName}
                    </span>
                    </div>
                    <div className={styles.UserMessage}>
                        <span>Write message</span>
                    </div>
                    {
                        this.followed(this.props.user.follow)
                    }
                </div>
            </div>
        );
    }
}

export default User;