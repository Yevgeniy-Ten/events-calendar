import {all} from "redux-saga/effects"
import {authWatcher} from "./authSaga/authSaga";
import {eventsWatcher} from "./eventsSaga/eventsSaga";

const mainSaga = function* () {
    yield all([authWatcher(), eventsWatcher()])
}

export default mainSaga