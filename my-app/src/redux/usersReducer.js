
const CHANGE_FOLLOW = "CHANGE_FOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";
const SET_TOTAL_COUNT_USERS = "SET_TOTAL_COUNT_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";

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

export function changeCurrentPageActionCreator(page){
    return{
        type : CHANGE_CURRENT_PAGE,
        currentPage: page
    }
}

export function setTotalCountUsersActionCreator(count){
    return {
        type: SET_TOTAL_COUNT_USERS,
        totalCount: count
    }
}

export function toggleIsFetchingActionCreator(toggle){
    return{
        type: TOGGLE_IS_FETCHING,
        toggle: toggle
    }
}

export function toggleFollowInProgress(isFetching,userID){
    return{
        type: TOGGLE_FOLLOWING_IN_PROGRESS,
        isFetching: isFetching,
        userIDFollowed : userID
    }
}

const initialState = {
    users :[],
    currentPage: 1,
    pageSize: 10,
    portion : 10,
    totalCountUsers: 40,
    isFetching: true,
    isFollowInProgress: []
}

export function usersReducer(state = initialState, action){
    const newState = Object.assign({},state);
    switch (action.type){
        case CHANGE_FOLLOW :
           newState.users = [...state.users.map(user => {
                if(user.id === action.id) user.followed = !user.followed
               return user
            })]
            return newState;
        case SET_USERS:
            newState.users = action.users;
            return newState;
        case CHANGE_CURRENT_PAGE:
            newState.currentPage = action.currentPage;
            return newState;
        case SET_TOTAL_COUNT_USERS:
            newState.totalCountUsers = action.totalCount;
            return newState;
        case TOGGLE_IS_FETCHING:
            newState.isFetching = action.toggle;
            return newState;
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            newState.isFollowInProgress = action.isFetching ?
                [...newState.isFollowInProgress, action.userIDFollowed] :
               newState.isFollowInProgress.filter(id => id !== action.userIDFollowed)
            return newState;
        default:
            return state;
    }
}