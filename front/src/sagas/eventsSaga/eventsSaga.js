import {put, takeEvery, call} from "redux-saga/effects"
import {REMOVE_EVENT} from "../../reducers/events/eventsTypes";
import {axiosRemoveEvent, removeEventError, removeEventSuccess} from "../../reducers/events/eventsActions";

function* removeEventWorker({payload: eventID}) {
    try {
        const response = yield call(axiosRemoveEvent, eventID)
        yield put(removeEventSuccess(response.data.id))
    } catch {
        removeEventError({msg: "Some error when deleting"})
    }
}


export function* eventsWatcher() {
    takeEvery(REMOVE_EVENT, removeEventWorker)
}