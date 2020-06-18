import { call, takeLatest, put } from 'redux-saga/effects';
import jwt from 'jwt-decode';
import { LOGIN_ACTIONS, LOGIN_ACTION_CREATORS } from './login.actions';
import { USER_ACTION_CREATORS } from '../user/user.actions';
import { initializeGoogleAuth2 } from '../../api/GAPI';
import { signInUser } from '../../api/loginApi';

const { REQUEST_TOKENS } = LOGIN_ACTIONS;

function* signInUserGenerator() {
    try {
        const auth_code = yield call(initializeGoogleAuth2);
        const tokens = yield call(signInUser, auth_code);
        yield put(LOGIN_ACTION_CREATORS.loginGoogleApi(tokens));
        const decodeAccessToken = jwt(tokens.access_token);
        yield put(USER_ACTION_CREATORS.userDetails(decodeAccessToken));
    } catch (e) {
        console.error(e);
    }
}

export function* loginSaga() {
    yield takeLatest(REQUEST_TOKENS, signInUserGenerator);
}
