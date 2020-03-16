export const USERS_REQUEST = 'USERS_REQUEST';
export const USERS_ERROR = 'USERS_ERROR';
export const USERS_RECEIVED = 'USERS_RECEIVED';

export const usersRequest = () => ({
    type: USERS_REQUEST,
});

export const usersError = error => ({
    type: USERS_ERROR,
    payload: error,
});

export const usersReceived = users => ({
    type: USERS_RECEIVED,
    payload: users,
});
