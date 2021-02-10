import {axiosInstance as axios} from "../../store/store";
import {
    DELETE_USER_FRIEND, DELETE_USER_FRIEND_SUCCESS, DELETE_USER_FRIENDS_ERROR,
    GET_USER_FRIENDS, GET_USER_FRIENDS_ERROR,
    GET_USER_FRIENDS_SUCCESS,
    SHARE_EVENT,
    SHARE_EVENT_ERROR,
    SHARE_EVENT_SUCCESS
} from "./shareTypes";

export const axiosEventShare = (email) => axios.post("/users/add", {email})
export const axiosGetUserFriends = () => axios.get("/users/friends")
export const axiosDeleteUserFriend = (id) => axios.delete(`/users/friends/${id}`)
export const deleteUserFriend = (id) => {
    return {
        type: DELETE_USER_FRIEND,
        payload: id
    }
}
export const deleteUserFriendError = () => {
    return {
        type: DELETE_USER_FRIENDS_ERROR,
    }
}
export const deleteUserFriendSuccess = (id) => {
    return {
        type: DELETE_USER_FRIEND_SUCCESS,
        payload: id
    }
}
export const eventShare = (email) => {
    return {
        type: SHARE_EVENT,
        payload: email
    }
}
export const eventShareError = (errors) => {
    return {
        type: SHARE_EVENT_ERROR,
        payload: errors
    }
}
export const eventShareSuccess = () => {
    return {
        type: SHARE_EVENT_SUCCESS,
    }
}

export const getUserFriends = () => {
    return {
        type: GET_USER_FRIENDS
    }
}
export const getUserFriendsSuccess = (users) => {
    return {
        type: GET_USER_FRIENDS_SUCCESS,
        payload: users
    }
}
export const getUserFriendsError = () => {
    return {
        type: GET_USER_FRIENDS_ERROR
    }
}