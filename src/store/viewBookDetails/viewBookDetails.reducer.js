import { BOOK_DETAILS_ACTIONS } from './viewBookDetails.actions';

const { VIEW_BOOK_DETAILS, RESET_BOOK_DETAILS } = BOOK_DETAILS_ACTIONS;

const initialState = {
    bookDetails: { showID: null },
};

function bookDetails(state = initialState, action) {
    switch (action.type) {
        case VIEW_BOOK_DETAILS: {
            return {
                ...state,
                bookDetails: {
                    ...state.bookDetails,
                    showID: action.payload.id,
                },
            };
        }
        case RESET_BOOK_DETAILS: {
            return {
                ...state,
                bookDetails: { ...state.bookDetails, showID: null },
            };
        }
        default:
            return state;
    }
}

export default bookDetails;
