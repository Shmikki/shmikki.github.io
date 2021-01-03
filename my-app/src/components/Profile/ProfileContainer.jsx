import {
    addPostActionCreator,
    setUserProfileActionCreator,
    updatePostTextActionCreator
} from "../../redux/profileReducer";
import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(responce => {
                    this.props.setUserProfile(responce.data);
                }
            )
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
        profile: state.profilePage.profile
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updatePostText: (text) => dispatch(updatePostTextActionCreator(text)),
        setUserProfile: (profile) => dispatch(setUserProfileActionCreator(profile))
    }
}

const withRouterProfileUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(withRouterProfileUrl);