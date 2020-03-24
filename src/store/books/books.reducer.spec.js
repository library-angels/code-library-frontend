/* eslint-disable max-len */
import { BOOKS_ACTION_CREATORS } from './books.actions';
import booksReducer from './books.reducer';

const {
    booksRequestDashboard,
    booksReceiveDashboard,
    booksRequestAll,
    booksReceiveAll,
} = BOOKS_ACTION_CREATORS;

const books = {
    dashboard: {},
    all: {},
};

describe('Books reducer', () => {
    it('should return the default initial state if no initial is passed in', () => {
        const got = booksReducer(undefined, {});
        const want = {
            dashboard: {},
            all: {},
        };
        expect(got).toEqual(want);
    });

    it('should handle BOOKS_REQUEST_DASHBOARD', () => {
        const action = booksRequestDashboard();

        const got = booksReducer(undefined, action);
        const want = {
            dashboard: {},
            all: {},
        };

        expect(got).toEqual(want);
    });

    it('should handle BOOKS_RECEIVE_DASHBOARD', () => {
        const action = booksReceiveDashboard(books.dashboard);

        const got = booksReducer(undefined, action);
        const want = {
            dashboard: books.dashboard,
            all: {},
        };

        expect(got).toEqual(want);
    });

    it('should handle BOOKS_REQUEST_ALL', () => {
        const action = booksRequestAll();

        const got = booksReducer(undefined, action);
        const want = {
            dashboard: {},
            all: {},
        };

        expect(got).toEqual(want);
    });

    it('should handle BOOKS_RECEIVE_ALL', () => {
        const action = booksReceiveAll(books.all);

        const got = booksReducer(undefined, action);
        const want = {
            dashboard: {},
            all: books.all,
        };

        expect(got).toEqual(want);
    });

    it('should return correct state after every action has been dispatched', () => {
        const actions = [
            booksRequestDashboard(),
            booksReceiveDashboard(books.dashboard),
            booksRequestAll(),
            booksReceiveAll(books.all),
        ];

        const got = actions.reduce(
            (acc, action) => booksReducer(acc, action),
            undefined,
        );
        const want = {
            dashboard: books.dashboard,
            all: books.all,
        };

        expect(got).toEqual(want);
    });
});
