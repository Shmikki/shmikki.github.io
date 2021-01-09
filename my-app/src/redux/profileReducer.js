import { profileAPI} from "../api/api";

const UPDATE_POST_TEXT = "UPDATE_POST_TEXT",
    ADD_POST = "ADD_POST",
    SET_USER_PROFILE = "SET_USER_PROFILE",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
    SET_STATUS = "SET_STATUS";

const initialState = {
    posts: [
        {src: "...", likes: 34, post_text: "Hello people"},
        {src: "...", likes: 34, post_text: "Belarus is capital of the USA"},
        {src: "...", likes: 23, post_text: "Maybe you want go walk?"}
    ],
    newPostText: "",
    profile: {
        photos: {}
    },
    status: "",
    isFetching: true,
};


export const updatePostTextActionCreator = (text) =>{
    return {
        type : UPDATE_POST_TEXT,
        postText: text
    }
}

export const addPostActionCreator = () => {
    return {
        type : ADD_POST
    }
}

export function toggleIsFetchingActionCreator(toggle) {
    return {
        type: TOGGLE_IS_FETCHING,
        toggle: toggle
    }
}

export const setUserProfileActionCreator = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}

export const setProfileStatusActionCreator = (status) => {
    return {
        type: SET_STATUS,
        status : status
    }
}

export const getProfileThunkCreator = (profileID) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true))
       profileAPI.getProfile(profileID).then(response => {
           dispatch(setUserProfileActionCreator(response.data))
           dispatch(toggleIsFetchingActionCreator(false))
       })
    }
}

export const getProfileStatusThunkCreator = (profileID) => {
    return (dispatch) => {
        profileAPI.getStatusProfile(profileID).then(response => dispatch(setProfileStatusActionCreator(response.data)))
    }
}

export const setProfileStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.setStatusProfile(status).then(response => {
            if(response.data.resultCode === 0){
                dispatch(setProfileStatusActionCreator(status));
            }
        });
    }
}

export const profileReducer = (state = initialState, action) => {
    const newState = Object.assign({},state)
    switch (action.type){
        case UPDATE_POST_TEXT:
            newState.newPostText = action.postText;
            return newState;
        case ADD_POST:
            let newPost = {src : '...', likes: 0, post_text : state.newPostText};
            newState.posts.push(newPost);
            newState.newPostText = '';
            return newState;
        case SET_USER_PROFILE:
            newState.profile = action.profile;
            return newState;
        case TOGGLE_IS_FETCHING:
            newState.isFetching = action.toggle;
            return newState;
        case SET_STATUS:
            newState.status = action.status;
            return newState;
        default:
            return state;
    }
}