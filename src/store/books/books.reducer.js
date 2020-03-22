import { BOOKS_ACTIONS } from './books.actions';

const {
    BOOKS_REQUEST_DASHBOARD,
    BOOKS_RECEIVE_DASHBOARD,
    BOOKS_REQUEST_ALL,
    BOOKS_RECEIVE_ALL,
} = BOOKS_ACTIONS;

const initialState = {
    dashboard: [],
    all: [],
};

function users(state = initialState, action) {
    switch (action.type) {
        case BOOKS_REQUEST_DASHBOARD: {
            return state;
        }
        case BOOKS_RECEIVE_DASHBOARD: {
            return {
                ...state,
                dashboard: action.payload.books,
            };
        }
        case BOOKS_REQUEST_ALL: {
            return state;
        }
        case BOOKS_RECEIVE_ALL: {
            return {
                ...state,
                all: action.payload.books,
            };
        }
        default:
            return state;
    }
}

export default users;
