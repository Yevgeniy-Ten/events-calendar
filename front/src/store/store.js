import {createStore, applyMiddleware} from "redux";
import mainSaga from "../sagas/mainSaga";
import mainReducer from "../reducers/mainReducer";
import axios from "axios"
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware()
const axiosInstance = axios.create({
    baseURL: "http://localhost:3003"
})

const store = createStore(mainReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mainSaga)
axiosInstance.interceptors.request.use(config => {
    try {
        config.headers["Authorization"] = store.getState().auth.user.token;
    } catch (e) {
        // user non authorized
    }
    return config;
});


export {axiosInstance}
export default store