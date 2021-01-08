import {NavLink} from "react-router-dom";

const Auth = (props) => {
    return (
        props.userID ? <span>Logout</span> : <NavLink to={"login"}>Login </NavLink>
    )
}

export default Auth;