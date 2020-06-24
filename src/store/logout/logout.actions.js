const LOG_OUT = 'LOG_OUT';

const logOut = () => ({
    type: LOG_OUT,
    payload: {},
});

export const LOGOUT_ACTIONS = {
    LOG_OUT,
};

export const LOGOUT_ACTION_CREATORS = {
    logOut,
};
