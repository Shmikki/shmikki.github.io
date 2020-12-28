import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import Profile from "../Profile";


const mapStateToProps = (state) => {
    return {
        profilePage : state.profilePage
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        addPost: () =>{
            dispatch(addPostActionCreator())
        },
        updatePostText: (text) => {
            dispatch(updatePostTextActionCreator(text))
        }
    }
}

const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile);
export default ProfileContainer;