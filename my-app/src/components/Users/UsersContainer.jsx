import {connect} from "react-redux";
import Users from "./Users";
import {changeFollowActionCreator} from "../../redux/usersReducer";


const mapStateToProps = state =>{
    return{
        usersPage: state.usersPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return(
        {
            changeFollow :(id) => dispatch(changeFollowActionCreator(id))
        }
    )
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;