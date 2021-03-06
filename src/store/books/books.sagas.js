/* eslint-disable func-names */
/* eslint-disable no-console */
import { put, all, takeEvery, select, call } from 'redux-saga/effects';
import { SEARCH_ACTION_CREATORS } from '../search/search.actions';

import {
    REQUEST_DESIGNATIONS,
    RECEIVE_DESIGNATIONS,
    REQUEST_DESIGNATION_BOOKS,
    REQUEST_DESIGNATION_PAGES,
    REQUEST_BOOKS_PUBLISHERS_SERIES,
    receiveDesignations,
    requestDesignationBooks,
    receiveDesignationBooks,
    setLastPageIndex,
    receiveFilterOptions,
} from './books.actions';

import {
    getDesignationCache,
    getDesignationBooks,
    getDesignations,
    getSearchBooksPublishers,
} from './books.selectors';

import {
    fetchDesignationBooks,
    fetchDesignations,
    fetchBooksPublisher,
    fetchBooksSeries,
} from '../../api/books';

const { searchClonePublisher } = SEARCH_ACTION_CREATORS;

function* fetchDesignationsGenerator() {
    try {
        const designations = yield call(fetchDesignations);
        yield put(receiveDesignations(designations));
    } catch (e) {
        console.error(e);
    }
}

function* fetchDesignationBooksGenerator(action) {
    const { offset, limit, designation_id, page } = action.payload;

    const designationBooks = yield select(
        getDesignationBooks({ page, designation_id }),
    );

    if (designationBooks.length > 0) {
        return;
    }

    try {
        const books = yield call(
            fetchDesignationBooks,
            offset,
            limit,
            designation_id,
        );

        if (books.length > 0) {
            const receiveAction = receiveDesignationBooks({
                books,
                designation_id,
                page,
            });

            yield put(receiveAction);
        }
    } catch (e) {
        console.error(e);
    }
}

function* fetchDesignationPagesGenerator(action) {
    const { designation_id, pages } = action.payload;

    try {
        yield all(
            pages.map(page =>
                call(
                    fetchDesignationBooksGenerator,
                    requestDesignationBooks({
                        page,
                        designation_id,
                    }),
                ),
            ),
        );

        const designationCache = yield select(
            getDesignationCache(designation_id),
        );

        const lastPageIndex = pages.reduce((acc, page) => {
            const designationPage = designationCache[page] || [];

            if (designationPage.length > 0 && designationPage.length < 20) {
                return page;
            }

            if (designationPage.length === 0) {
                return acc || page - 1;
            }

            return acc;
        }, null);

        if (lastPageIndex) {
            yield put(
                setLastPageIndex({
                    designation_id,
                    lastPageIndex,
                }),
            );
        }
    } catch (e) {
        console.error(e);
    }
}

function* fetchInitialBooksForEachDesignation() {
    const designations = yield select(getDesignations);

    try {
        yield all(
            Object.keys(designations).map(designation_id =>
                call(
                    fetchDesignationBooksGenerator,
                    requestDesignationBooks({
                        designation_id,
                    }),
                ),
            ),
        );
    } catch (e) {
        console.error(e);
    }
}

function* fetchBooksDetailsGenerator() {
    try {
        const publishers = yield call(fetchBooksPublisher);
        const series = yield call(fetchBooksSeries);
        yield put(receiveFilterOptions(publishers, series));
        const filteredPublishers = yield select(getSearchBooksPublishers);
        yield put(searchClonePublisher(filteredPublishers));
    } catch (e) {
        console.error(e);
    }
}

// eslint-disable-next-line import/prefer-default-export
export function* watcher() {
    yield takeEvery(REQUEST_DESIGNATIONS, fetchDesignationsGenerator);
    yield takeEvery(RECEIVE_DESIGNATIONS, fetchInitialBooksForEachDesignation);
    yield takeEvery(REQUEST_DESIGNATION_BOOKS, fetchDesignationBooksGenerator);
    yield takeEvery(REQUEST_DESIGNATION_PAGES, fetchDesignationPagesGenerator);
    yield takeEvery(
        REQUEST_BOOKS_PUBLISHERS_SERIES,
        fetchBooksDetailsGenerator,
    );
}
