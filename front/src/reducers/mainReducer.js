import {combineReducers} from "redux";
import authReducer from "./auth/authReducer";
import eventsReducer from "./events/eventsReducer";

const mainReducer = combineReducers({
    auth: authReducer,
    events: eventsReducer
})

export default mainReducer