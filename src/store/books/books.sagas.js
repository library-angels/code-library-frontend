/* eslint-disable func-names */
/* eslint-disable no-console */
import { put, all, takeEvery, select, call } from 'redux-saga/effects';

import {
    REQUEST_DESIGNATIONS,
    RECEIVE_DESIGNATIONS,
    REQUEST_DESIGNATION_BOOKS,
    REQUEST_DESIGNATION_PAGES,
    receiveDesignations,
    requestInitialBooks,
    receiveInitialBooks,
    requestDesignationBooks,
    receiveDesignationBooks,
    setLastPageIndex,
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
    const {
        offset,
        limit,
        designation_id: designationID,
        page,
    } = action.payload;

    const designationBooks = yield select(store => {
        if (store.booksCollection.cache[designationID] !== undefined) {
            return store.booksCollection.cache[designationID][page] || [];
        }

        return [];
    });

    if (designationBooks.length > 0) {
        return { books: designationBooks, page };
    }

    try {
        const books = yield call(
            fetchDesignationBooks,
            offset,
            limit,
            designationID,
        );

        if (books.length === 0) {
            return { books: [], page };
        }

        const receiveAction = receiveDesignationBooks({
            books,
            designationID,
            page,
        });

        yield put(receiveAction);

        return { books, page };
    } catch (e) {
        console.error(e);
    }

    return { books: [], page: -1 };
}

function* fetchDesignationPagesGenerator(action) {
    const { designation_id: designationID, pages } = action.payload;

    try {
        const actions = yield all(
            pages.map(page => {
                return call(
                    fetchDesignationBooksGenerator,
                    requestDesignationBooks({
                        page,
                        designation_id: designationID,
                    }),
                );
            }),
        );

        const { lastPageIndex } = actions.reduce(
            (acc, { books, page }) => {
                if (books.length > 0 && books.length < 20) {
                    acc.lastPageIndex = page;
                    return acc;
                }

                if (books.length === 0) {
                    if (acc.lastPageIndex) {
                        return acc;
                    }

                    acc.lastPageIndex = page - 1;
                }

                return acc;
            },
            { lastPageIndex: null },
        );

        if (lastPageIndex !== null) {
            const isAlreadySet = yield select(
                store =>
                    store.booksCollection.cache[designationID].lastPageIndex,
            );

            if (isAlreadySet) {
                return;
            }

            yield put(
                setLastPageIndex({
                    designation_id: designationID,
                    lastPageIndex,
                }),
            );
        }
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
    yield takeEvery(REQUEST_DESIGNATION_BOOKS, fetchDesignationBooksGenerator);
    yield takeEvery(REQUEST_DESIGNATION_PAGES, fetchDesignationPagesGenerator);
}
