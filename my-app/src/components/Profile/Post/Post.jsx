import styles from "./Post.module.css";
import React from "react";
import UserPost from "./UserPost/UserPost";


class Post extends React.Component {


    render() {
        return (
            <div className={styles.post}>
                <div className={styles.post__content}>
                    <UserPost src={this.props.src} />
                    <div className={styles.post__text}>
                        {this.props.post_text}
                    </div>
                    <div className={styles.fl}></div>
                    <div className={styles.post__likes}>
                        <span> {this.props.likes} likes</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;