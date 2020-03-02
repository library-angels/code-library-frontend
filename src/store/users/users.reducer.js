import { USERS_REQUEST, USERS_ERROR, USERS_RECEIVED } from './users.actions';

const initialState = {
    users: {},
    error: {},
};

function users(state = initialState, action) {
    switch (action.type) {
        case USERS_REQUEST: {
            return state;
        }
        case USERS_ERROR: {
            return {
                ...state,
                error: action.payload,
            };
        }
        case USERS_RECEIVED: {
            return {
                ...state,
                users: action.payload,
            };
        }
        default:
            return state;
    }
}

export default users;
