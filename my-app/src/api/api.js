import axios from "axios";


export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "b6d68778-a69a-45fd-9609-1071119b3bcc"
    }
});


export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },

    setFollow(userID) {
        return instance.post(`/follow/${userID}`)
    },

    setUnFollow(userID) {
        return instance.delete(`/follow/${userID}`)
    }
}


export function getProfile(userID) {
    return instance.get(`/profile/${userID}`)
        .then(responce => {
            return responce.data
        });
}

export function getAuth() {
    return instance.get("/auth/me").then(responce => responce.data)
}
