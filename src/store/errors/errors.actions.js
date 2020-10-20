const ERROR_MESSAGE = 'ERROR_MESSAGE';
const ERROR_MESSAGE_RESET = 'ERROR_MESSAGE_RESET';

const errorType = message => ({
    type: ERROR_MESSAGE,
    payload: {
        message,
    },
});

const resetErrorType = () => ({
    type: ERROR_MESSAGE_RESET,
});

export const ERROR_ACTIONS = {
    ERROR_MESSAGE,
    ERROR_MESSAGE_RESET,
};
export const ERROR_ACTION_CREATORS = {
    errorType,
    resetErrorType,
};
