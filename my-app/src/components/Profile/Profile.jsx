import Post from "./Post/Post";
import styles from "./Pfofile.module.css"
import User from "./User/User";
import React from "react";
import NewPost from "./NewPost/NewPost";




function Profile(props){
    
        return (
            <div className={styles.content}>
                <User fullName={props.profile.fullName} />
                <NewPost
                    newPostText={props.newPostText}
                    updatePostText={props.updatePostText}
                    addPost={props.addPost}
                />
                {props.posts.map(item => <Post post_text={item.post_text} likes={item.likes} src={item.src} />)}
            </div>
        );
}

export default Profile;