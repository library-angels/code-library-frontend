import { all, fork } from 'redux-saga/effects';

import { watcher } from './books/books.sagas';

const rootSaga = function* root() {
    yield all([fork(watcher)]);
};

export default rootSaga;
