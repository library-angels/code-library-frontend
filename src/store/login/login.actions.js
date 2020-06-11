// const LOAD_GAPI = 'LOAD_GAPI';
const LOGIN_GAPI = 'LOGIN_GAPI';

const loginGoogleApi = (accessToken, refreshToken) => ({
    type: LOGIN_GAPI,
    payload: {
        accessToken,
        refreshToken,
    },
});

export const LOGIN_ACTIONS = {
    LOGIN_GAPI,
};

export const LOGIN_ACTION_CREATORS = {
    loginGoogleApi,
};
