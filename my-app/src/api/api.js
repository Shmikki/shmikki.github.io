import axios from "axios";


export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY" : "61b74ca7-e8cf-4376-afb6-53ce5c349669"
    }
});


export function getUsers(currentPage = 1, pageSize = 10){
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
        .then(responce => responce.data);
}

export function getProfile(userID){
    return instance.get(`/profile/${userID}`)
        .then(responce => {
          return  responce.data
        });
}

export function getAuth(){
    return instance.get("/auth/me").then(responce => responce.data)
}

export function setFollow(userID, changeFollow){
    instance.post(`/follow/${userID}`).then(responce => {
        if(responce.data.resultCode === 0){
           return changeFollow(userID);
        }
    });
}

export function setUnFollow(userID, changeFollow){
    instance.delete(`/follow/${userID}`).then(responce => {
        if(responce.data.resultCode === 0){
           return changeFollow(userID);
        }
    });
}