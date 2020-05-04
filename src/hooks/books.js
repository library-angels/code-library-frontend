import { useSelector, useDispatch } from 'react-redux';

import { BOOKS_ACTION_CREATORS } from '../store/books/books.actions';
import BOOKS_SELECTORS from '../store/books/books.selectors';

export function useBooksDispatch() {
    const dispatch = useDispatch();

    const loadBooks = () => dispatch(BOOKS_ACTION_CREATORS.request());
    const loadDesignations = () =>
        dispatch(BOOKS_ACTION_CREATORS.requestDesignations());

    return {
        loadBooks,
        loadDesignations,
    };
}

export function useBooksSelector() {
    return {
        dashboard: useSelector(BOOKS_SELECTORS.getDashboardBooks),
        designations: useSelector(BOOKS_SELECTORS.getDesignations),
    };
}

export const useCategoryBooks = category =>
    useSelector(BOOKS_SELECTORS.getBooksByCategory(category));

export const useBookByID = id => useSelector(BOOKS_SELECTORS.getBookByID(id));

export const useBooksByIDs = ids =>
    useSelector(BOOKS_SELECTORS.getBooksByIDs(ids));
