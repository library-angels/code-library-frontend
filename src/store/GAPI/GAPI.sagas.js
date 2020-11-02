/* eslint-disable func-names */
/* eslint-disable no-console */
import { call, takeLatest } from 'redux-saga/effects';
import { GAPI_ACTIONS } from './GAPI.actions';

import { loadGoogleApi, requestIdentifier } from '../../api/GAPI';

const { REQUEST_LOAD_GAPI } = GAPI_ACTIONS;

function* loadGoogleApiGenerator() {
    try {
        const identifier = yield call(requestIdentifier);
        yield call(loadGoogleApi, identifier.identifier);
    } catch (e) {
        console.error(e);
    }
}

export function* gaipSaga() {
    yield takeLatest(REQUEST_LOAD_GAPI, loadGoogleApiGenerator);
}
