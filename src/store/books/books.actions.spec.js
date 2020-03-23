import configureStore from 'redux-mock-store';

import { BOOKS_ACTIONS, BOOKS_ACTION_CREATORS } from './books.actions';

const {
    BOOKS_REQUEST_DASHBOARD,
    BOOKS_RECEIVE_DASHBOARD,
    BOOKS_REQUEST_ALL,
    BOOKS_RECEIVE_ALL,
} = BOOKS_ACTIONS;

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

describe('Books action creators', () => {
    it('should create an action to request dashboard books', () => {
        expect(booksRequestDashboard()).toEqual({
            type: BOOKS_REQUEST_DASHBOARD,
            payload: {},
        });
    });

    it('should create an action to receive dashboard books', () => {
        expect(booksReceiveDashboard(books.dashboard)).toEqual({
            type: BOOKS_RECEIVE_DASHBOARD,
            payload: {
                books: books.dashboard,
            },
        });
    });

    it('should create an action to request all books', () => {
        expect(booksRequestAll()).toEqual({
            type: BOOKS_REQUEST_ALL,
            payload: {},
        });
    });

    it('should create an action to receive all books', () => {
        expect(booksReceiveAll(books.all)).toEqual({
            type: BOOKS_RECEIVE_ALL,
            payload: {
                books: books.all,
            },
        });
    });
});

describe('Dispatch User actions', () => {
    it('should dispatch actions', () => {
        const mockStore = configureStore([]);

        // Initialize mockstore with empty state
        const initialState = {};
        const store = mockStore(initialState);

        // Dispatch the action
        store.dispatch(booksRequestDashboard());
        store.dispatch(booksReceiveDashboard(books.dashboard));
        store.dispatch(booksRequestAll());
        store.dispatch(booksReceiveAll(books.all));

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        const expectedPayload = [
            {
                type: BOOKS_REQUEST_DASHBOARD,
                payload: {},
            },
            {
                type: BOOKS_RECEIVE_DASHBOARD,
                payload: {
                    books: books.dashboard,
                },
            },
            {
                type: BOOKS_REQUEST_ALL,
                payload: {},
            },
            {
                type: BOOKS_RECEIVE_ALL,
                payload: {
                    books: books.all,
                },
            },
        ];

        expect(actions).toEqual(expectedPayload);
    });
});
