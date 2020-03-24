import { useSelector, useDispatch } from 'react-redux';

import { BOOKS_ACTION_CREATORS } from '../store/books/books.actions';
import {
    getDashboard,
    getAllBooks,
    getCategory,
} from '../store/books/books.selectors';

const { booksRequestDashboard, booksRequestAll } = BOOKS_ACTION_CREATORS;

export default function useBooks(category) {
    const dispatch = useDispatch();

    return {
        load: () => {
            dispatch(booksRequestDashboard());
            dispatch(booksRequestAll());
        },
        get: {
            dashboard: useSelector(getDashboard),
            all: useSelector(getAllBooks),
            category: useSelector(getCategory(category)),
        },
    };
}
