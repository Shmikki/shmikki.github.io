import React from "react";
import styles from "./User.module.css";
import UserAvatar from "./UserAvatar/UserAvatar";
import {setFollow, setUnFollow} from "../../../api/api";

class User extends React.Component{

    constructor(props) {
        super(props);
        this.onChangeFollow = this.onChangeFollow.bind(this);
    }

    onChangeFollow(id){
        this.props.changeFollow(id);
    }



    render(){
        const id = this.props.user.id;
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
                        <button onClick={() => setUnFollow(id,this.onChangeFollow)}>followed</button>
                        :
                        <button onClick={() => setFollow(id,this.onChangeFollow)}>unfollowed</button>
                    }
                </div>
            </div>
        );
    }
}

export default User;