import {all} from "redux-saga/effects"
import {authWatcher} from "./authSaga/authSaga";
import {eventsWatcher} from "./eventsSaga/eventsSaga";
import {shareWithUserWatcher} from "./shareSaga/shareSaga";

const mainSaga = function* () {
    yield all([authWatcher(), eventsWatcher(), shareWithUserWatcher()])
}

export default mainSaga