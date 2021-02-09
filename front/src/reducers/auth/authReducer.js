import {
    AUTH_REQUEST_ERROR,
    FACEBOOK_SIGN_USER,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    REGISTER_USER,
    REGISTER_USER_SUCCESS
} from "./authTypes";

const initialState = {
    user: null,
    loading: null,
    errors: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {...initialState, loading: true}
        case LOGIN_USER:
            return {...initialState, loading: true}
        case FACEBOOK_SIGN_USER: {
            return {...initialState, loading: true}
        }
        case LOGIN_USER_SUCCESS:
            return {...initialState, user: action.payload}
        case REGISTER_USER_SUCCESS:
            return {...initialState, user: action.payload}
        case AUTH_REQUEST_ERROR:
            return {...state, errors: action.payload, loading: false}
        default: {
            return state
        }
    }
}

export default authReducer