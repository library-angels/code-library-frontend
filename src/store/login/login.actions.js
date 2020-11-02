// const LOAD_GAPI = 'LOAD_GAPI';
const LOGIN_GAPI = 'LOGIN_GAPI';
const REQUEST_TOKENS = 'REQUEST_TOKENS';
const RESET_TOKENS = 'RESET_TOKENS';
const LOGIN_CHECK_SESSION = 'LOGIN_CHECK_SESSION';
const LOGIN_STORE_SESSION = 'LOGIN_STORE_SESSION';

const loginGoogleApi = ({ token }) => ({
    type: LOGIN_GAPI,
    payload: {
        accessToken: token,
    },
});

const resetLoginTokens = () => ({
    type: RESET_TOKENS,
    payload: {
        accessToken: '',
    },
});

const loginExchangeTokens = () => ({
    type: REQUEST_TOKENS,
});

const checkSession = () => ({
    type: LOGIN_CHECK_SESSION,
});

const storeSession = status => ({
    type: LOGIN_STORE_SESSION,
    payload: { status },
});
export const LOGIN_ACTIONS = {
    LOGIN_GAPI,
    REQUEST_TOKENS,
    RESET_TOKENS,
    LOGIN_CHECK_SESSION,
    LOGIN_STORE_SESSION,
};

export const LOGIN_ACTION_CREATORS = {
    loginGoogleApi,
    loginExchangeTokens,
    resetLoginTokens,
    checkSession,
    storeSession,
};
