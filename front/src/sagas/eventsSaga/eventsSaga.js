import {put, takeEvery, call} from "redux-saga/effects"
import {CREATE_EVENT, REMOVE_EVENT} from "../../reducers/events/eventsTypes";
import {
    axiosCreateEvent,
    axiosRemoveEvent, createEventError, createEventSuccess,
    removeEventError,
    removeEventSuccess
} from "../../reducers/events/eventsActions";

function* removeEventWorker({payload: eventID}) {
    try {
        const response = yield call(axiosRemoveEvent, eventID)
        yield put(removeEventSuccess(response.data.id))
    } catch {
        removeEventError({msg: "Some error when deleting"})
    }
}

function* createEventWorker({payload: event}) {
    try {
        yield call(axiosCreateEvent, event)
        yield put(createEventSuccess())
    } catch (e) {
        if (e.response && e.response.data) {
            yield put(createEventError(e.response.data))
        } else {
            yield put(createEventError({msg: e.message || "Check your connection"}))
        }
    }
}

export function* eventsWatcher() {
    yield takeEvery(CREATE_EVENT, createEventWorker)
    yield  takeEvery(REMOVE_EVENT, removeEventWorker)
}