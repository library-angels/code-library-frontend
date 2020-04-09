const VIEW_BOOK_DETAILS = 'VIEW_BOOK_DETAILS';
const RESET_BOOK_DETAILS = 'RESET_BOOK_DETAILS';

const bookDetails = id => ({
    type: VIEW_BOOK_DETAILS,
    payload: { id },
});

const resetBookDetails = () => ({
    type: RESET_BOOK_DETAILS,
    payload: {},
});

export const BOOK_DETAILS_ACTIONS = { VIEW_BOOK_DETAILS, RESET_BOOK_DETAILS };
export const BOOK_DETAILS_ACTION_CREATORS = { bookDetails, resetBookDetails };
