import { all, fork } from 'redux-saga/effects';

import { watchBooksRequest } from './books/books.sagas';

const rootSaga = function* root() {
    yield all([fork(watchBooksRequest)]);
};

export default rootSaga;
