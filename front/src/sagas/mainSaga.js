import {all} from "redux-saga/effects"
import {authWatcher} from "./authSaga/authSaga";

const mainSaga = function* () {
    yield all([authWatcher()])
}

export default mainSaga