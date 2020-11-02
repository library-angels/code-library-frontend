/* eslint-disable func-names */
/* eslint-disable no-console */
import { call, takeLatest, put, select } from 'redux-saga/effects';
import jwt from 'jwt-decode';
import { LOGIN_ACTIONS, LOGIN_ACTION_CREATORS } from './login.actions';
import { USER_ACTION_CREATORS } from '../user/user.actions';
import { initializeGoogleAuth2 } from '../../api/GAPI';
import LOGIN_SELECTORS from './login.selector';
import { ERROR_ACTION_CREATORS } from '../errors/errors.actions';
/* eslint-disable no-console */
import { signInUser, checkSession } from '../../api/loginApi';

const { REQUEST_TOKENS, LOGIN_CHECK_SESSION } = LOGIN_ACTIONS;

function* signInUserGenerator() {
    try {
        const auth_code = yield call(initializeGoogleAuth2);
        const tokens = yield call(signInUser, auth_code);
        yield put(LOGIN_ACTION_CREATORS.loginGoogleApi(tokens));
        const decodeAccessToken = jwt(tokens.token);
        yield put(USER_ACTION_CREATORS.userDetails(decodeAccessToken));
    } catch (e) {
        console.error(e);
        yield put(ERROR_ACTION_CREATORS.errorType(e.error));
    }
}

function* sessionCheckerGenerator() {
    try {
        const accessToken = yield select(LOGIN_SELECTORS.getAccessToken);
        const session = yield call(checkSession, accessToken);
        yield put(LOGIN_ACTION_CREATORS.storeSession(session));
    } catch (e) {
        console.error(e);
        yield put(ERROR_ACTION_CREATORS.errorType(e.error));
    }
}

export function* loginSaga() {
    yield takeLatest(REQUEST_TOKENS, signInUserGenerator);
    yield takeLatest(LOGIN_CHECK_SESSION, sessionCheckerGenerator);
}
