/* eslint-disable func-names */
/* eslint-disable no-console */
import { call, takeLatest, put, takeEvery, select } from 'redux-saga/effects';
import { SEARCH_ACTION_CREATORS, SEARCH_ACTIONS } from './search.actions';
import SEARCH_SELECTORS from './search.selectors';
import { fetchFilteredBooks } from '../../api/books';

/* eslint-disable no-console */
const {
    SEARCH_RECEIVE_FILTERED_BOOKS,
    SEARCH_REQUEST_FILTERED_BOOKS,
} = SEARCH_ACTIONS;

function* filterSearchInitialGenerator(action) {
    let LastPageIndex = yield select(SEARCH_SELECTORS.getSearchLastIndex);

    try {
        if (!LastPageIndex) {
            const { offset } = action.payload;
            const page = offset / 12;
            const filteredList = yield call(fetchFilteredBooks, offset);
            if (filteredList.length < 12) {
                LastPageIndex = offset / 12 + 1;
            }
            yield put(
                SEARCH_ACTION_CREATORS.receiveFilteredBooks(
                    filteredList,
                    offset,
                    LastPageIndex,
                    page,
                ),
            );
        }
    } catch (e) {
        console.error(e);
    }
}

function* filterSearchList(action) {
    let { offset } = action.payload;
    const { filteredList } = action.payload;
    try {
        if (filteredList.length === 12) {
            offset += 12;

            yield call(
                filterSearchInitialGenerator,
                SEARCH_ACTION_CREATORS.requestFilteredBooks(offset),
            );
        }
    } catch (e) {
        console.error(e);
    }
}

export function* filterResults() {
    yield takeLatest(
        SEARCH_REQUEST_FILTERED_BOOKS,
        filterSearchInitialGenerator,
    );
    yield takeEvery(SEARCH_RECEIVE_FILTERED_BOOKS, filterSearchList);
}
