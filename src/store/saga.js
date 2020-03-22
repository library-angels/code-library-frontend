import { all, fork } from 'redux-saga/effects';

import {
    watchIncrementAsync,
    watchDecrementAsync,
    watchResetAsync,
} from './counter/sagas';

import { watchUsersRequest } from './users/users.sagas';
import { watchBooksRequest } from './books/books.sagas';

const rootSaga = function* root() {
    yield all([
        fork(watchIncrementAsync),
        fork(watchDecrementAsync),
        fork(watchResetAsync),
        fork(watchUsersRequest),
        fork(watchBooksRequest),
    ]);
};

export default rootSaga;
