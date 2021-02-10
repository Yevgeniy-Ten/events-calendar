import {combineReducers} from "redux";
import authReducer from "./auth/authReducer";
import eventsReducer from "./events/eventsReducer";
import shareReducer from "./shareReducer/shareReducer";

const mainReducer = combineReducers({
    auth: authReducer,
    events: eventsReducer,
    share: shareReducer
})

export default mainReducer