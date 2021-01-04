const Auth = (props) =>{
    return(
        props.userID ? <span>Logout</span> : <span>Login</span>
    )
}

export default Auth;