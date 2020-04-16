/* eslint-disable func-names */
/* eslint-disable no-console */
import { put, takeEvery, call } from 'redux-saga/effects';

import { BOOKS_ACTIONS, BOOKS_ACTION_CREATORS } from './books.actions';
import api from '../../api/books';

export function createFetchAllBooks({ fetchAllBooks, fetchDashboardIDs }) {
    return function*() {
        try {
            console.log('Fetch all books');
            const books = yield call(fetchAllBooks);
            yield put(BOOKS_ACTION_CREATORS.receiveAll(books));

            const ids = yield call(fetchDashboardIDs);
            yield put(BOOKS_ACTION_CREATORS.receiveDashboardIDs(ids));
        } catch (e) {
            console.error(`Couldn't all books`);
        }
    };
}

export function* watchBooksRequest() {
    const getAllBooksGenerator = createFetchAllBooks({
        fetchAllBooks: api.fetchAllBooks,
        fetchDashboardIDs: api.fetchDashboardIDs,
    });

    yield takeEvery(BOOKS_ACTIONS.REQUEST_ALL, getAllBooksGenerator);
}
