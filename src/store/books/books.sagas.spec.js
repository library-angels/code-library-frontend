/* eslint-disable max-len */
import { put, call } from 'redux-saga/effects';
import { createFetchAllBooks, createFetchDashboardBooks } from './books.sagas';
import { BOOKS_ACTION_CREATORS } from './books.actions';

const { booksReceiveDashboard, booksReceiveAll } = BOOKS_ACTION_CREATORS;

const store = {
    dashboard: {},
    all: {},
};

const mockFetchDashboardBooks = () => Promise.resolve(store.dashboard);
const mockFetchAllBooks = () => Promise.resolve(store.all);

describe('Books Sagas test', () => {
    describe('Watch fetch dashboard books requests test', () => {
        const curry = createFetchDashboardBooks(mockFetchDashboardBooks);
        const generator = curry();

        it('fetchDashboardBooks Saga must call fetchDashboardBooks', () => {
            const got = generator.next().value;
            const want = call(mockFetchDashboardBooks);

            expect(got).toEqual(want);
        });

        it('fetchDashboardBooks Saga must dispatch "BOOKS_RECEIVE_DASHBOARD"', () => {
            const got = generator.next(store.dashboard).value;
            const want = put(booksReceiveDashboard(store.dashboard));

            expect(got).toEqual(want);
        });

        it('fetchDashboardBooks Saga must be done', () => {
            const got = generator.next();
            const want = {
                done: true,
                value: undefined,
            };

            expect(got).toEqual(want);
        });
    });

    describe('Watch fetch all books requests test', () => {
        const curry = createFetchAllBooks(mockFetchAllBooks);
        const generator = curry();

        it('fetchAllBooks Saga must call fetchAllBooks', () => {
            const got = generator.next().value;
            const want = call(mockFetchAllBooks);

            expect(got).toEqual(want);
        });

        it('fetchAllBooks Saga must dispatch "BOOKS_RECEIVE_ALL"', () => {
            const got = generator.next(store.dashboard).value;
            const want = put(booksReceiveAll(store.all));

            expect(got).toEqual(want);
        });

        it('fetchAllBooks Saga must be done', () => {
            const got = generator.next();
            const want = {
                done: true,
                value: undefined,
            };

            expect(got).toEqual(want);
        });
    });
});
