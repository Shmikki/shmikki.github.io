
const CHANGE_FOLLOW = "CHANGE_FOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";
const SET_TOTAL_COUNT_USERS = "SET_TOTAL_COUNT_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


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

const initialState = {
    users :[],
    currentPage: 1,
    pageSize: 10,
    totalCountUsers: 0,
    isFetching: true
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
        default:
            return state;
    }
}