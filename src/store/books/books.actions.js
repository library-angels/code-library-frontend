const BOOKS_REQUEST_DASHBOARD = 'BOOKS_REQUEST_DASHBOARD';
const BOOKS_RECEIVE_DASHBOARD = 'BOOKS_RECEIVE_DASHBOARD';
const BOOKS_REQUEST_ALL = 'BOOKS_REQUEST_ALL';
const BOOKS_RECEIVE_ALL = 'BOOKS_RECEIVE_ALL';

const booksRequestDashboard = () => ({
    type: BOOKS_REQUEST_DASHBOARD,
    payload: {},
});

const booksReceiveDashboard = books => ({
    type: BOOKS_RECEIVE_DASHBOARD,
    payload: {
        books,
    },
});

const booksRequestAll = () => ({
    type: BOOKS_REQUEST_ALL,
    payload: {},
});

const booksReceiveAll = books => ({
    type: BOOKS_RECEIVE_ALL,
    payload: {
        books,
    },
});

export const BOOKS_ACTIONS = {
    BOOKS_REQUEST_DASHBOARD,
    BOOKS_RECEIVE_DASHBOARD,
    BOOKS_REQUEST_ALL,
    BOOKS_RECEIVE_ALL,
};

export const BOOKS_ACTION_CREATORS = {
    booksRequestDashboard,
    booksReceiveDashboard,
    booksRequestAll,
    booksReceiveAll,
};
