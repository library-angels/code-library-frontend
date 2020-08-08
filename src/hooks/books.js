import { useSelector, useDispatch } from 'react-redux';
import {
    requestDesignations,
    requestDesignationPages,
    requestPublishersAndSeries,
    dashboardScrollHeight,
} from '../store/books/books.actions';
import {
    getDesignations,
    getDashboardBooks,
    getDesignationBooks,
    getLastPageIndex,
    getBookByID,
    getCache,
    getDashboardScrollHeight,
} from '../store/books/books.selectors';

export function useBooksDispatch() {
    const dispatch = useDispatch();

    const loadDesignations = () => dispatch(requestDesignations());

    const loadDesignationPages = ({ page, designation_id }) => {
        const pages = page <= 2 ? [1, 2, 3, 4, 5] : [page, page + 1, page + 2];

        dispatch(
            requestDesignationPages({
                pages,
                designation_id,
            }),
        );
    };

    return {
        loadDesignations,
        loadDesignationPages,
    };
}

export function useBooksSelector() {
    const designations = useSelector(getDesignations);
    const dashboardBooks = useSelector(getDashboardBooks);

    return {
        designations,
        dashboardBooks,
    };
}

export function useDesignationBooks({ page, designation_id }) {
    const designationsCurry = getDesignationBooks({ page, designation_id });
    const designationBooks = useSelector(designationsCurry);

    const indexCurry = getLastPageIndex(designation_id);
    const lastPageIndex = useSelector(indexCurry);

    return {
        designationBooks,
        lastPageIndex,
    };
}

export function useBookByID({ id }) {
    const idCurry = getBookByID(id);
    const book = useSelector(idCurry);

    return book;
}

export function useAccountBooks() {
    const designations = useSelector(getDesignations);
    const cache = useSelector(getCache);

    const { borrowing, waitingList, history } = Object.keys(
        designations,
    ).reduce(
        (acc, designationID) => {
            const designationCache = cache[designationID];

            if (!designationCache) {
                return acc;
            }

            const page = designationCache[0] ? designationCache[0] : [];

            if (page.length < 3) {
                return acc;
            }

            acc.borrowing.push(page[0]);
            acc.waitingList.push(page[1]);
            acc.history.push(page[2]);

            return acc;
        },
        {
            borrowing: [],
            waitingList: [],
            history: [],
        },
    );

    return [
        { title: 'Borrowing', books: borrowing },
        { title: 'Waiting List', books: waitingList },
        { title: 'History', books: history },
    ];
}

export function useBooksDetailsDispatch() {
    const dispatch = useDispatch();

    const loadPublishersAndSeries = () =>
        dispatch(requestPublishersAndSeries());

    return {
        loadPublishersAndSeries,
    };
}

export function useDashboardHeightDispatch() {
    const dispatch = useDispatch();
    const pageHeight = useSelector(getDashboardScrollHeight);
    const changePageHeight = height => dispatch(dashboardScrollHeight(height));

    return {
        changePageHeight,
        pageHeight,
    };
}
