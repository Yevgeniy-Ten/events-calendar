import {put, takeEvery, call} from "redux-saga/effects"
import {FACEBOOK_SIGN_USER, LOGIN_USER, REGISTER_USER} from "../../reducers/auth/authTypes";
import {
    axiosFacebookSign,
    axiosLoginUser,
    axiosRegisterUser,
    loginUserSuccess,
    authRequestError,
    registerUserSuccess
} from "../../reducers/auth/authActions";

function* facebookSingWorker({payload: user}) {
    try {
        const response = yield call(() => axiosFacebookSign(user))
        yield put(loginUserSuccess(response.data))
    } catch (e) {
        if (e.response && e.response.data) {
            yield put(authRequestError(e.response.data))
        } else {
            yield put(authRequestError({msg: e.message || "Check your connection"}))
        }
    }
}

function* loginWorker({payload: user}) {
    try {
        const response = yield call(() => axiosLoginUser(user))
        yield put(loginUserSuccess(response.data))
    } catch (e) {
        if (e.response && e.response.data) {
            yield put(authRequestError(e.response.data))
        } else {
            yield put(authRequestError({msg: e.message || "Check your connection"}))
        }
    }
}


function* registerWorker({payload: user}) {
    try {
        const response = yield call(() => axiosRegisterUser(user))
        yield put(registerUserSuccess(response.data))
    } catch (e) {
        if (e.response && e.response.data) {
            yield put(authRequestError(e.response.data))
        } else {
            yield put(authRequestError({msg: e.message || "Check your connection"}))
        }
    }

}

export function* authWatcher() {
    yield takeEvery(LOGIN_USER, loginWorker)
    yield takeEvery(REGISTER_USER, registerWorker)
    yield takeEvery(FACEBOOK_SIGN_USER, facebookSingWorker)
}