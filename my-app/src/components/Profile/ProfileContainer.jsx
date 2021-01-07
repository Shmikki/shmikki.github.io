import {
    addPostActionCreator, getProfileThunkCreator,
    setUserProfileActionCreator,
    updatePostTextActionCreator
} from "../../redux/profileReducer";
import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {getProfile} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID ? this.props.match.params.userID : 13777;
        this.props.getProfile(userID);
    }

    render() {
        return (
            <Profile profile={this.props.profile} newPostText={this.props.newPostText}
                     updatePostText={this.props.updatePostText}
                     addPost={this.props.addPost} posts={this.props.posts}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        myProfileId: state.auth.id
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updatePostText: (text) => dispatch(updatePostTextActionCreator(text)),
        getProfile : (profileID) => dispatch(getProfileThunkCreator(profileID))
    }
}

const withRouterProfileUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(withRouterProfileUrl);