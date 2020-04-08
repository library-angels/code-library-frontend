const VIEW_BOOK_DETAILS = 'VIEW_BOOK_DETAILS';

const bookDetails = id => ({
    type: VIEW_BOOK_DETAILS,
    id,
    payload: {},
});

export const BOOK_DETAILS_ACTIONS = { VIEW_BOOK_DETAILS };
export const BOOK_DETAILS_ACTION_CREATORS = { bookDetails };
