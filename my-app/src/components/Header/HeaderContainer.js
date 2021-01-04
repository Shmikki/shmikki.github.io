import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import {setUserDataActionCreator} from "../../redux/authReducer";
import Header from "./Header";
import {getAuth} from "../../api/api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        getAuth()
            .then(data => {
                this.props.setUserData(data.data.id,data.data.email,data.data.login)
            })
    }

    render() {
        return (
            <Header userID={this.props.auth.userID} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (userID,email,login) => dispatch(setUserDataActionCreator(userID, email, login))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);