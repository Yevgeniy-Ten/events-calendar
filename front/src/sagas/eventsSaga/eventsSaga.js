import {put, takeEvery, call} from "redux-saga/effects"
import {CREATE_EVENT, GET_EVENTS, REMOVE_EVENT} from "../../reducers/events/eventsTypes";
import {
    axiosCreateEvent, axiosGetEvents,
    axiosRemoveEvent, createEventError, createEventSuccess, getDayEventsError, getDayEventsSuccess,
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

function* getEventsWorker({payload: date}) {
    try {
        const response = yield call(axiosGetEvents, date)
        yield put(getDayEventsSuccess(response.data))
    } catch {
        yield put(getDayEventsError())
    }
}

export function* eventsWatcher() {
    yield takeEvery(CREATE_EVENT, createEventWorker)
    yield  takeEvery(REMOVE_EVENT, removeEventWorker)
    yield  takeEvery(GET_EVENTS, getEventsWorker)
}