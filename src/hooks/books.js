import { useSelector, useDispatch } from 'react-redux';

import { BOOKS_ACTION_CREATORS } from '../store/books/books.actions';
import {
    getDashboard,
    getAllBooks,
    getCategory,
    getBookByID,
} from '../store/books/books.selectors';

const { booksRequestDashboard, booksRequestAll } = BOOKS_ACTION_CREATORS;

export default function useBooksByCategory() {
    const dispatch = useDispatch();

    return {
        load: () => {
            dispatch(booksRequestDashboard());
            dispatch(booksRequestAll());
        },
        useGetByCategory: category => useSelector(getCategory(category)),
        getDashboard: useSelector(getDashboard),
        getAll: useSelector(getAllBooks),
        getCategories: Object.keys(useSelector(getAllBooks)),
    };
}

export function useGetBookById(id) {
    return useSelector(getBookByID(id));
}
