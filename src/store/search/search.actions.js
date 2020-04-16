const SEARCH_SELECT_FIELD = 'SEARCH_SELECT_FIELD';
const SEARCH_INPUT_TYPING = 'SEARCH_INPUT_TYPING';

const searchSelectField = field => ({
    type: SEARCH_SELECT_FIELD,
    payload: {
        field,
    },
});

const searchInputTyping = input => ({
    type: SEARCH_INPUT_TYPING,
    payload: {
        input,
    },
});

export const SEARCH_ACTIONS = {
    SEARCH_SELECT_FIELD,
    SEARCH_INPUT_TYPING,
};

export const SEARCH_ACTION_CREATORS = {
    searchSelectField,
    searchInputTyping,
};
