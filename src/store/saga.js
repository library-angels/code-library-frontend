import { all, fork } from 'redux-saga/effects';

import { watcher } from './books/books.sagas';
import { gaipSaga } from './GAPI/GAPI.sagas';
import { loginSaga } from './login/login.sagas';
import { logoutSaga } from './logout/logout.sagas';

const rootSaga = function* root() {
    yield all([
        fork(watcher),
        fork(gaipSaga),
        fork(loginSaga),
        fork(logoutSaga),
    ]);
};
export default rootSaga;
