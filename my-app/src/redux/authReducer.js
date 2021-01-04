const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
        userID : null,
        email: null,
        login: null
}

export function setUserDataActionCreator(userID, email, login){
    return{
        type: SET_USER_DATA,
        data: {
            userID: userID,
            email: email,
            login: login
        }
    }
}

export const authReducer = (state = initialState , action) =>{
    switch (action.type) {
        case SET_USER_DATA :
        return {...state , ...action.data}
        default:
            return state;
    }
}