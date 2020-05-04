/* eslint-disable func-names */
/* eslint-disable no-console */
import { put, take, takeEvery, call, select } from 'redux-saga/effects';

import { BOOKS_ACTIONS, BOOKS_ACTION_CREATORS } from './books.actions';
import BOOKS_SELECTORS from './books.selectors';
import api from '../../api/books';

function* fetchBooksGenerator() {
    try {
        const books = yield call(api.fetchAllBooks);
        yield put(BOOKS_ACTION_CREATORS.receive(books));
    } catch (e) {
        console.error(`Couldn't fetch all books`);
    }
}

function* fetchDesignationsGenerator() {
    try {
        const books = yield call(api.fetchDesignations);
        yield put(BOOKS_ACTION_CREATORS.receiveDesignations(books));
    } catch (e) {
        console.error(`Couldn't fetch all designations`);
    }
}

function* groupBooksByDesignation() {
    const books = yield select(BOOKS_SELECTORS.getBooks);
    const designations = yield select(BOOKS_SELECTORS.getDesignations);

    const designationGroups = books.reduce((acc, book) => {
        const { id, designation_id: designationID } = book;
        const designation = designations[designationID - 1];

        if (acc[designation] === undefined) {
            acc[designation] = {};
        }

        acc[designation][id] = book;

        return acc;
    }, {});

    yield put(
        BOOKS_ACTION_CREATORS.receiveDesignationGroups(designationGroups),
    );
}

// eslint-disable-next-line import/prefer-default-export
export function* watchRequestBooksAndDesignations() {
    yield takeEvery(BOOKS_ACTIONS.REQUEST, fetchBooksGenerator);
    yield takeEvery(
        BOOKS_ACTIONS.REQUEST_DESIGNATIONS,
        fetchDesignationsGenerator,
    );
}

export function* watchReceiveBooksAndDesignations() {
    // wait for designations
    yield take(BOOKS_ACTIONS.RECEIVE_DESIGNATIONS);
    // wait for library
    yield take(BOOKS_ACTIONS.RECEIVE);
    // dispatch group by designation
    yield put(BOOKS_ACTION_CREATORS.requestDesignationGroups());
}

export function* watchGroupByDesignation() {
    yield takeEvery(
        BOOKS_ACTIONS.REQUEST_DESIGNATION_GROUPS,
        groupBooksByDesignation,
    );
}
