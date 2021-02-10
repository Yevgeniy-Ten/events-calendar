import {axiosInstance as axios} from "../../store/store";
import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    AUTH_REQUEST_ERROR, FACEBOOK_SIGN_USER, LOGOUT_USER, LOGOUT_USER_SUCCESS
} from "./authTypes";

export const axiosLoginUser = (user) => axios.post("/users/sessions", user)
export const axiosRegisterUser = (user) => axios.post("/users", user)
export const axiosFacebookSign = (user) => axios.post("/users/facebook/sessions", user)
export const axiosLogoutUser = (user) => axios.delete("/users/sessions")
export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
}
export const logoutUserSuccess = () => {
    return {
        type: LOGOUT_USER_SUCCESS
    }
}
export const registerUser = (user) => {
    return {
        type: REGISTER_USER,
        payload: user
    }
}
export const facebookSing = (user) => {
    return {
        type: FACEBOOK_SIGN_USER,
        payload: user
    }
}
export const registerUserSuccess = (user) => {
    return {
        type: REGISTER_USER_SUCCESS,
        payload: user
    }
}

export const loginUser = (user) => {
    return {
        type: LOGIN_USER,
        payload: user
    }
}
export const loginUserSuccess = (user) => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: user
    }
}
export const authRequestError = (errors) => {
    return {
        type: AUTH_REQUEST_ERROR,
        payload: errors
    }
}