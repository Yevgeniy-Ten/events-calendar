import {put, call, takeEvery} from "redux-saga/effects";
import {
    axiosDeleteUserFriend,
    axiosEventShare,
    axiosGetUserFriends, deleteUserFriendError, deleteUserFriendSuccess,
    eventShareError,
    eventShareSuccess, getUserFriends, getUserFriendsError, getUserFriendsSuccess
} from "../../reducers/shareReducer/shareActions";
import {DELETE_USER_FRIEND, GET_USER_FRIENDS, SHARE_EVENT} from "../../reducers/shareReducer/shareTypes";

function* deleteUserFriendWorker({payload: userId}) {
    try {
        const response = yield call(axiosDeleteUserFriend, userId)
        yield put(deleteUserFriendSuccess(response.data.id))
    } catch (e) {
        yield put(deleteUserFriendError())
    }
}

function* getUserFriendsWorker() {
    try {
        const response = yield call(axiosGetUserFriends)
        yield put(getUserFriendsSuccess(response.data))
    } catch (e) {
        yield put(getUserFriendsError())
    }
}

function* shareWithUserWorker({payload: email}) {
    try {
        const response = yield call(axiosEventShare, email)
        yield put(eventShareSuccess(response.data))
        yield put(getUserFriends())
    } catch (e) {
        if (e.response && e.response.data) {
            yield put(eventShareError({msg: e.response.data.msg}))
        } else {
            yield put(eventShareError({msg: e.message || "Check your connection"}))
        }
    }
}

export function* shareWithUserWatcher() {
    yield takeEvery(SHARE_EVENT, shareWithUserWorker)
    yield takeEvery(GET_USER_FRIENDS, getUserFriendsWorker)
    yield takeEvery(DELETE_USER_FRIEND, deleteUserFriendWorker)
}