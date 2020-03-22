/* eslint-disable func-names */
/* eslint-disable no-console */
import { put, takeEvery, call } from 'redux-saga/effects';

import { BOOKS_ACTIONS, BOOKS_ACTION_CREATORS } from './books.actions';
import { fetchDashboardBooks, fetchAllBooks } from '../../api/books';

const { BOOKS_REQUEST_DASHBOARD, BOOKS_REQUEST_ALL } = BOOKS_ACTIONS;
const { booksReceiveDashboard, booksReceiveAll } = BOOKS_ACTION_CREATORS;

export function createFetchDashboardBooks(callback) {
    return function*() {
        try {
            console.log('Fetch dashboard books');
            const dashboardBooks = yield call(callback);
            yield put(booksReceiveDashboard(dashboardBooks));
        } catch (e) {
            console.error("Couldn't fetch Dashboard books");
        }
    };
}

export function createFetchAllBooks(callback) {
    return function*() {
        try {
            console.log('Fetch all books');
            const books = yield call(callback);
            yield put(booksReceiveAll(books));
        } catch (e) {
            console.error(`Couldn't all books`);
        }
    };
}

export function* watchBooksRequest() {
    const getDashboardBooksGenerator = createFetchDashboardBooks(
        fetchDashboardBooks,
    );
    const getAllBooksGenerator = createFetchAllBooks(fetchAllBooks);

    yield takeEvery(BOOKS_REQUEST_DASHBOARD, getDashboardBooksGenerator);
    yield takeEvery(BOOKS_REQUEST_ALL, getAllBooksGenerator);
}
