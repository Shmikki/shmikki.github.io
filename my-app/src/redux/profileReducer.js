const UPDATE_POST_TEXT = "UPDATE_POST_TEXT",
    ADD_POST = "ADD_POST";

const initialState = {
    posts: [
        {src: "...", likes: 34, post_text: "Hello people"},
        {src: "...", likes: 34, post_text: "Belarus is capital of the USA"},
        {src: "...", likes: 23, post_text: "Maybe you want go walk?"}
    ],
    newPostText: ""
};

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
        default:
            return state;
    }
}

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