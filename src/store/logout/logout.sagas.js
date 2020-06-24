/* eslint-disable func-names */
/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import { LOGIN_ACTION_CREATORS } from '../login/login.actions';
import { USER_ACTION_CREATORS } from '../user/user.actions';
import { LOGOUT_ACTIONS } from './logout.actions';

const { LOG_OUT } = LOGOUT_ACTIONS;

function* resetUserDataGenerator() {
    try {
        yield put(LOGIN_ACTION_CREATORS.resetLoginTokens());
        yield put(USER_ACTION_CREATORS.resetUserTokens());
    } catch (e) {
        console.error(e);
    }
}

export function* logoutSaga() {
    yield takeLatest(LOG_OUT, resetUserDataGenerator);
}
