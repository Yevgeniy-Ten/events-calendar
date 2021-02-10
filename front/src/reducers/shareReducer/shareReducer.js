import {
    CLOSE_DRAWER, DELETE_USER_FRIEND, DELETE_USER_FRIEND_SUCCESS, DELETE_USER_FRIENDS_ERROR,
    GET_USER_FRIENDS, GET_USER_FRIENDS_ERROR, GET_USER_FRIENDS_SUCCESS,
    OPEN_DRAWER,
    SHARE_EVENT,
    SHARE_EVENT_ERROR,
    SHARE_EVENT_SUCCESS
} from "./shareTypes";

const initialState = {
    errors: null,
    loading: false,
    isCreated: false,
    drawerIsOpen: false,
    users: []
}
const shareReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHARE_EVENT:
            return {...state, loading: true, isCreated: false, errors: null}
        case SHARE_EVENT_SUCCESS:
            return {...state, loading: false, isCreated: true}
        case SHARE_EVENT_ERROR:
            return {...state, loading: false, errors: action.payload}
        case CLOSE_DRAWER:
            return {...state, drawerIsOpen: false}
        case OPEN_DRAWER:
            return {...state, drawerIsOpen: true}
        case GET_USER_FRIENDS:
            return {...state, loading: true}
        case GET_USER_FRIENDS_SUCCESS: {
            return {...state, users: action.payload}
        }
        case GET_USER_FRIENDS_ERROR: {
            return {...state, loading: false}
        }
        case DELETE_USER_FRIEND: {
            return {...state, loading: true}
        }
        case DELETE_USER_FRIEND_SUCCESS: {
            return {...state, loading: false, users: state.users.filter(u => u._id !== action.payload)}
        }
        case DELETE_USER_FRIENDS_ERROR: {
            return {...state, loading: false}
        }
        default:
            return state
    }
}

export default shareReducer