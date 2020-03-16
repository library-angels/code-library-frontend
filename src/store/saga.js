import { all, fork } from 'redux-saga/effects';

import {
    watchIncrementAsync,
    watchDecrementAsync,
    watchResetAsync,
} from './counter/sagas';

import { watchUsersRequest } from './users/users.sagas';

const rootSaga = function* root() {
    yield all([
        fork(watchIncrementAsync),
        fork(watchDecrementAsync),
        fork(watchResetAsync),
        fork(watchUsersRequest),
    ]);
};

export default rootSaga;
