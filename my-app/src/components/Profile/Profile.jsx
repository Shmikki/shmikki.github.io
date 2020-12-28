import Post from "./Post/Post";
import styles from "./Pfofile.module.css"
import User from "./User/User";
import React from "react";
import NewPost from "./NewPost/NewPost";




class Profile extends React.Component{

    render()
    {
        return (
            <div className={styles.content}>
                <User name={"Ivan"} birthday={"17.10.1999"} city={"Minsk"} education={"BSU 2021"}/>
                <NewPost
                    newPostText={this.props.profilePage.newPostText}
                    updatePostText={this.props.updatePostText}
                    addPost={this.props.addPost}
                />
                {this.props.profilePage.posts.map(item => <Post post_text={item.post_text} likes={item.likes} src={item.src} />)}
            </div>
        );
    }
}

export default Profile;