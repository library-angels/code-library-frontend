import { LOGIN_ACTIONS } from './login.actions';

const { LOGIN_GAPI, RESET_TOKENS } = LOGIN_ACTIONS;

function updateObject(state, action) {
    return {
        ...state,
        ...action.payload,
    };
}

export default function loginReducer(state = {}, action) {
    switch (action.type) {
        case LOGIN_GAPI: {
            return updateObject(state, action);
        }
        case RESET_TOKENS: {
            return updateObject(state, action);
        }
        default:
            return state;
    }
}
