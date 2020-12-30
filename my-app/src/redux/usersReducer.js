
const CHANGE_FOLLOW = "CHANGE_FOLLOW";
const SET_USERS = "SET_USERS";

export function changeFollowActionCreator(userID){
    return{
        type: CHANGE_FOLLOW,
        id: userID
    }
}

export function setUsersActionCreator(users){
    return{
        type : SET_USERS,
        users : users
    }
}

const initialState = {
    users :[]
}

export function usersReducer(state = initialState, action){
    const newState = Object.assign({},state);
    switch (action.type){
        case CHANGE_FOLLOW :
            newState.users.map(user => {
                if(user.id === action.id) user.followed = !user.followed
            })
            return newState;
        case SET_USERS:
            newState.users = action.users;
            return newState;
        default:
            return state;
    }
}