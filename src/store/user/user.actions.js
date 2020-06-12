const USER_DETAILS = 'USER_DETAILS';

const userDetails = user => ({
    type: USER_DETAILS,
    payload: {
        firstName: user.given_name,
        lastName: user.family_name,
        email: user.email,
        profilePic: user.picture,
    },
});
export const USER_ACTIONS = {
    USER_DETAILS,
};

export const USER_ACTION_CREATORS = {
    userDetails,
};
