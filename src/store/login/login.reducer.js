import { LOGIN_ACTIONS } from './login.actions';

const { LOGIN_GAPI, RESET_TOKENS } = LOGIN_ACTIONS;

const initialState = {
    accessToken: '',
    refreshToken: '',
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_GAPI: {
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
            };
        }
        case RESET_TOKENS: {
            return {
                state: undefined,
            };
        }
        default:
            return state;
    }
}
