import React from "react";
import styles from "./NewMessage.module.css";




class NewMessage extends React.Component{

    constructor(props) {
        super(props);
        this.MyRef = React.createRef();
    }


    onSendMessage(){
       this.props.sendMessage();
    }

    onChangeMessage(){
        let text = this.MyRef.current.value;
        this.props.updateMessageBody(text);
    }

    render(){
        return(
            <div className={styles.form}>
                <textarea name="" id="" ref={this.MyRef} onChange={() => this.onChangeMessage() } value={ this.props.newMessageText }  className={styles.form__area} placeholder="Write message" />
                <button className={styles.form__sendBtn} onClick={() => this.onSendMessage()}>Send</button>
            </div>
        )
    }
}

export default NewMessage;