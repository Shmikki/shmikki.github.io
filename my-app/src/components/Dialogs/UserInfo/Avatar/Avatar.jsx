import styles from "./Avatar.module.css";


function Avatar(props){
    return(
        <img src={props.AvatarURL} alt={props.name}  className={styles.AvatarImg}/>
    );
}

export default  Avatar;