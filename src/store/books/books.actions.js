export const REQUEST_DESIGNATIONS = 'REQUEST_DESIGNATIONS';
export const RECEIVE_DESIGNATIONS = 'RECEIVE_DESIGNATIONS';
export const REQUEST_DESIGNATION_BOOKS = 'REQUEST_DESIGNATION_BOOKS';
export const RECEIVE_DESIGNATION_BOOKS = 'RECEIVE_DESIGNATION_BOOKS';
export const REQUEST_DESIGNATION_PAGES = 'REQUEST_DESIGNATION_PAGES';
export const SET_LAST_PAGE_INDEX = 'SET_LAST_PAGE_INDEX';
export const DASHBOARD_SCROLL_HEIGHT = 'DASHBOARD_SCROLL_HEIGHT';
export const REQUEST_BOOKS_PUBLISHERS_SERIES =
    'REQUEST_BOOKS_PUBLISHERS_SERIES';
export const RECEIVE_BOOKS_PUBLISHERS_SERIES =
    'RECEIVE_BOOKS_PUBLISHERS_SERIES';

export const requestDesignations = () => ({
    type: REQUEST_DESIGNATIONS,
});

export const receiveDesignations = designations => ({
    type: RECEIVE_DESIGNATIONS,
    payload: {
        designations,
    },
});

export const requestDesignationBooks = ({
    offset = 0,
    limit = 20,
    page = 0,
    designation_id = 0,
} = {}) => {
    let offsetByPage = offset;

    if (page !== 0) {
        for (let i = page; i > 1; i -= 1) {
            offsetByPage += 20;
        }
    }

    return {
        type: REQUEST_DESIGNATION_BOOKS,
        payload: {
            offset: offsetByPage,
            limit,
            designation_id,
            page,
        },
    };
};

export const receiveDesignationBooks = ({ books, designation_id, page }) => ({
    type: RECEIVE_DESIGNATION_BOOKS,
    payload: {
        books,
        designation_id,
        page,
    },
});

export const requestDesignationPages = ({
    pages = [],
    designation_id = 0,
}) => ({
    type: REQUEST_DESIGNATION_PAGES,
    payload: {
        pages,
        designation_id,
    },
});

export const setLastPageIndex = ({ designation_id, lastPageIndex }) => ({
    type: SET_LAST_PAGE_INDEX,
    payload: {
        designation_id,
        lastPageIndex,
    },
});

export const requestPublishersAndSeries = () => ({
    type: REQUEST_BOOKS_PUBLISHERS_SERIES,
});

export const receiveFilterOptions = (Publishers, Series) => ({
    type: RECEIVE_BOOKS_PUBLISHERS_SERIES,
    payload: {
        Publishers,
        Series,
    },
});

export const dashboardScrollHeight = height => ({
    type: DASHBOARD_SCROLL_HEIGHT,
    payload: {
        height,
    },
});
