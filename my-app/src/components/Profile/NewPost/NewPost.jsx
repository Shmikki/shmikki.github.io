import React from "react";
import styles from "./NewPost.module.css";


class NewPost extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    onAddPost(){
        this.props.addPost();
    }


    handleChange() {
        let text = this.myRef.current.value;
        this.props.updatePostText(text);
    }

    render() {
        return (
            <div className={styles.form__post}>
                <textarea onChange={() => this.handleChange() } placeholder={"Write your news"} value={ this.props.newPostText } ref={ this.myRef } className={ styles.form__area } />
                <button className={styles.form__addbtn} onClick={() =>  this.onAddPost() } >Add</button>
            </div>
        )
    }

}


export default NewPost;