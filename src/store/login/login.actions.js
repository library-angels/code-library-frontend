// const LOAD_GAPI = 'LOAD_GAPI';
const LOGIN_GAPI = 'LOGIN_GAPI';
const REQUEST_TOKENS = 'REQUEST_TOKENS';
const RESET_TOKENS = 'RESET_TOKENS';

const loginGoogleApi = tokens => ({
    type: LOGIN_GAPI,
    payload: {
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token,
    },
});

const resetLoginTokens = () => ({
    type: RESET_TOKENS,
});

const loginExchangeTokens = () => ({
    type: REQUEST_TOKENS,
});

export const LOGIN_ACTIONS = {
    LOGIN_GAPI,
    REQUEST_TOKENS,
    RESET_TOKENS,
};

export const LOGIN_ACTION_CREATORS = {
    loginGoogleApi,
    loginExchangeTokens,
    resetLoginTokens,
};
