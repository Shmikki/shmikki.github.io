import React from "react";
import styles from "./User.module.css";
import UserAvatar from "./UserAvatar/UserAvatar";
import {setFollow, setUnFollow} from "../../../api/api";

class User extends React.Component{

    constructor(props) {
        super(props);
        this.onChangeFollow = this.onChangeFollow.bind(this);
        this.id = this.props.user.id;
    }

    onChangeFollow(id){
        this.props.changeFollow(id);
        this.props.toggleIsFollowIngProgress(false,id);
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
                        <button disabled={this.props.isFollowInProgress.some((userID) => userID === this.id)}
                                onClick={() => {
                                    this.props.toggleIsFollowIngProgress(true, this.id);
                                    setUnFollow(this.id,this.onChangeFollow)}}>followed</button>
                        :
                        <button disabled={this.props.isFollowInProgress.some((userID) => userID  === this.id)}
                            onClick={() =>{
                                this.props.toggleIsFollowIngProgress(true, this.id);
                                setFollow(this.id,this.onChangeFollow)}}>unfollowed</button>
                    }
                </div>
            </div>
        );
    }
}

export default User;