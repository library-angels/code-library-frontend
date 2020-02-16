import { all, fork } from 'redux-saga/effects';

import {
    watchIncrementAsync,
    watchDecrementAsync,
    watchResetAsync,
} from './counter/saga';

const rootSaga = function* root() {
    yield all([
        fork(watchIncrementAsync),
        fork(watchDecrementAsync),
        fork(watchResetAsync),
    ]);
};

export default rootSaga;
