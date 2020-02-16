import { put, takeEvery, call } from 'redux-saga/effects';
import {
    increment,
    INCREMENT_ASYNC,
    decrement,
    DECREMENT_ASYNC,
    reset,
    RESET_ASYNC,
} from './actions';

export const delay = ms => new Promise(res => setTimeout(res, ms));

export function* onIncrementAsync() {
    // use the call effect
    yield call(delay, 1000); // { CALL: {fn: delay, args: [1000]}}
    yield put(increment()); // { PUT: { TYPE: "INCREMENT" }}
}

function* onDecrementAsync() {
    yield delay(1000);
    yield put(decrement());
}

function* onResetAsync() {
    yield delay(1000);
    yield put(reset());
}

export function* watchIncrementAsync() {
    yield takeEvery(INCREMENT_ASYNC, onIncrementAsync);
}

export function* watchDecrementAsync() {
    yield takeEvery(DECREMENT_ASYNC, onDecrementAsync);
}

export function* watchResetAsync() {
    yield takeEvery(RESET_ASYNC, onResetAsync);
}
