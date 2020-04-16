import { BOOKS_ACTIONS } from './books.actions';

const initialState = {
    categories: {},
    dashboardIDs: {},
};

function users(state = initialState, action) {
    switch (action.type) {
        case BOOKS_ACTIONS.REQUEST_DASHBOARD_IDS: {
            return state;
        }
        case BOOKS_ACTIONS.RECEIVE_DASHBOARD_IDS: {
            return {
                ...state,
                dashboardIDs: action.payload.dashboardIDs,
            };
        }
        case BOOKS_ACTIONS.REQUEST_ALL: {
            return state;
        }
        case BOOKS_ACTIONS.RECEIVE_ALL: {
            return {
                ...state,
                categories: action.payload.books,
            };
        }
        default:
            return state;
    }
}

export default users;
