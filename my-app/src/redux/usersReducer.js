
const CHANGE_FOLLOW = "CHANGE_FOLLOW";

export function changeFollowActionCreator(userID){
    return{
        type: CHANGE_FOLLOW,
        id: userID
    }
}


const initialState = {
    users :[
        {firstName:"Ivan" , lastName: "Ignatyuk", id: 1 , AvatarSrc: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png", follow: false},
        {firstName:"Ivan" , lastName: "Ignatyuk", id: 2 , AvatarSrc: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png", follow: false},
        {firstName:"Ivan" , lastName: "Ignatyuk", id: 3 , AvatarSrc: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png", follow: false}
    ]
}

export function usersReducer(state = initialState, action){
    const newState = Object.assign({},state);
    switch (action.type){
        case CHANGE_FOLLOW :
            newState.users.map(user => {
                if(user.id === action.id) user.follow = !user.follow
            });
            return newState;
        default:
            return state
    }
}