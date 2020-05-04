import { BOOKS_ACTIONS } from './books.actions';

const initialState = {
    designations: [],
    books: [],
    groups: {},
};

function users(state = initialState, action) {
    switch (action.type) {
        case BOOKS_ACTIONS.REQUEST: {
            return state;
        }
        case BOOKS_ACTIONS.RECEIVE: {
            const { books } = action.payload;

            return {
                ...state,
                books,
            };
        }
        case BOOKS_ACTIONS.REQUEST_DESIGNATIONS: {
            return state;
        }
        case BOOKS_ACTIONS.RECEIVE_DESIGNATIONS: {
            const { designations } = action.payload;

            return {
                ...state,
                designations,
            };
        }
        case BOOKS_ACTIONS.REQUEST_DESIGNATION_GROUPS: {
            return state;
        }
        case BOOKS_ACTIONS.RECEIVE_DESIGNATION_GROUPS: {
            const { groups } = action.payload;

            return {
                ...state,
                groups,
            };
        }
        default:
            return state;
    }
}

export default users;
