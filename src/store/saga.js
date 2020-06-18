import { fork } from 'redux-saga/effects';

import { watcher } from './books/books.sagas';
import { gaipSaga } from './GAPI/GAPI.sagas';
import { loginSaga } from './login/login.sagas';

const rootSaga = function* root() {
    yield fork(watcher);
    yield fork(gaipSaga);
    yield fork(loginSaga);
};
export default rootSaga;
