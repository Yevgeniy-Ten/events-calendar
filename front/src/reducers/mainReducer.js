import {combineReducers} from "redux";
import authReducer from "./auth/authReducer";


const mainReducer = combineReducers({
    auth: authReducer
})

export default mainReducer