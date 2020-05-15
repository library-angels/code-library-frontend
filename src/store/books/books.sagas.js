/* eslint-disable func-names */
/* eslint-disable no-console */
import { put, all, take, takeEvery, call, select } from 'redux-saga/effects';

import {
    REQUEST_DESIGNATION_BOOKS,
    RECEIVE_DESIGNATION_BOOKS,
    REQUEST_DESIGNATIONS,
    RECEIVE_DESIGNATIONS,
    receiveDesignationBooks,
    receiveDesignations,
    receiveInitialBooks,
    requestInitialBooks,
} from './books.actions';

import { fetchDesignationBooks, fetchDesignations } from '../../api/books';

function* fetchDesignationsGenerator() {
    try {
        const designationsArray = yield call(fetchDesignations);
        const designationsMap = designationsArray.reduce(
            (acc, { id, name }) => {
                acc[id] = name;
                return acc;
            },
            {},
        );

        yield put(receiveDesignations(designationsMap));
    } catch (e) {
        console.error(e);
    }
}

function* fetchDesignationBooksGenerator(action) {
    const designations = yield select(
        store => store.booksCollection.designations,
    );

    console.log(designations);

    try {
        const { offset, limit, designation_id } = action.payload;

        const books = yield call(
            fetchDesignationBooks,
            offset,
            limit,
            designation_id,
        );

        yield put(receiveDesignationBooks(books));
    } catch (e) {
        console.error(e);
    }
}

function* fetchInitialBooksForEachDesignation() {
    yield put(requestInitialBooks());

    const designations = yield select(
        store => store.booksCollection.designations,
    );
    const designationIDs = Object.keys(designations);

    try {
        const [...books] = yield all(
            designationIDs.map(designationID => {
                const [offset, limit] = [0, 20];

                return call(
                    fetchDesignationBooks,
                    offset,
                    limit,
                    designationID,
                );
            }),
        );

        const flatBooks = books.reduce((acc, booksArray) => [
            ...acc,
            ...booksArray,
        ]);

        yield put(receiveInitialBooks(flatBooks));
    } catch (e) {
        console.error(e);
    }
}

// eslint-disable-next-line import/prefer-default-export
export function* watcher() {
    yield takeEvery(REQUEST_DESIGNATIONS, fetchDesignationsGenerator);
    yield takeEvery(RECEIVE_DESIGNATIONS, fetchInitialBooksForEachDesignation);
    yield takeEvery(REQUEST_DESIGNATION_BOOKS, fetchDesignationsGenerator);
}
