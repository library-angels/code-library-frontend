import { all, fork } from 'redux-saga/effects';

import {
    watchRequestBooksAndDesignations,
    watchGroupByDesignation,
    watchReceiveBooksAndDesignations,
} from './books/books.sagas';

const rootSaga = function* root() {
    yield all([
        fork(watchRequestBooksAndDesignations),
        fork(watchReceiveBooksAndDesignations),
        fork(watchGroupByDesignation),
    ]);
};

export default rootSaga;
