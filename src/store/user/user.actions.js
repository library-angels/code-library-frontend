const USER_DETAILS = 'USER_DETAILS';
const RESET_USER_DATA = 'RESET_USER_DATA';

const userDetails = user => ({
    type: USER_DETAILS,
    payload: {
        firstName: user.given_name,
        lastName: user.family_name,
        email: user.email,
        profilePic: user.picture,
    },
});

const resetUserTokens = () => ({
    type: RESET_USER_DATA,
    payload: {
        firstName: '',
        lastName: '',
        email: '',
        profilePic: '',
    },
});

export const USER_ACTIONS = {
    USER_DETAILS,
    RESET_USER_DATA,
};

export const USER_ACTION_CREATORS = {
    userDetails,
    resetUserTokens,
};
