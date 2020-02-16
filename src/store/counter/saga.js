import { put, takeEvery } from 'redux-saga/effects';
import {
  increment,
  INCREMENT_ASYNC,
  decrement,
  DECREMENT_ASYNC,
  reset,
  RESET_ASYNC,
} from './actions';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* onIncrementAsync() {
  yield delay(1000);
  yield put(increment());
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
