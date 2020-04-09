import { useSelector, useDispatch } from 'react-redux';
import { BOOK_DETAILS_ACTION_CREATORS } from '../store/viewBookDetails/viewBookDetails.actions';
import getBookId from '../store/viewBookDetails/viewBookDetails.selectors';

const { bookDetails, resetBookDetails } = BOOK_DETAILS_ACTION_CREATORS;

export default function useBookDetails() {
    const dispatch = useDispatch();

    return {
        bookDetails: {
            bookView: id => {
                dispatch(bookDetails(id));
            },
            getState: useSelector(getBookId),
        },
        resetBookDetails: {
            resetBookView: () => {
                dispatch(resetBookDetails());
            },
        },
    };
}
