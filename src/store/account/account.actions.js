const ACCOUNT_TOGGLE_MODAL = 'ACCOUNT_TOGGLE_MODAL';
const ACCOUNT_VIEW_BOOK_DETAILS = 'ACCOUNT_VIEW_BOOK_DETAILS';

const accountViewBookDetails = id => ({
    type: ACCOUNT_VIEW_BOOK_DETAILS,
    payload: {
        id,
    },
});

const accountToggleModal = () => ({
    type: ACCOUNT_TOGGLE_MODAL,
    payload: {},
});

export const ACCOUNT_ACTIONS = {
    ACCOUNT_TOGGLE_MODAL,
    ACCOUNT_VIEW_BOOK_DETAILS,
};

export const ACCOUNT_ACTION_CREATORS = {
    accountViewBookDetails,
    accountToggleModal,
};
