export const REQUEST_DESIGNATIONS = 'REQUEST_DESIGNATIONS';
export const RECEIVE_DESIGNATIONS = 'RECEIVE_DESIGNATIONS';
export const REQUEST_INITIAL_BOOKS = 'REQUEST_INITIAL_BOOKS';
export const RECEIVE_INITIAL_BOOKS = 'RECEIVE_INITIAL_BOOKS';
export const REQUEST_DESIGNATION_BOOKS = 'REQUEST_DESIGNATION_BOOKS';
export const RECEIVE_DESIGNATION_BOOKS = 'RECEIVE_DESIGNATION_BOOKS';
export const REQUEST_DESIGNATION_PAGES = 'REQUEST_DESIGNATION_PAGES';
export const RECEIVE_DESIGNATION_PAGES = 'RECEIVE_DESIGNATION_PAGES';
export const SET_LAST_PAGE_INDEX = 'SET_LAST_PAGE_INDEX';

export const requestDesignations = () => ({
    type: REQUEST_DESIGNATIONS,
});

export const receiveDesignations = designations => ({
    type: RECEIVE_DESIGNATIONS,
    payload: {
        designations,
    },
});

export const requestInitialBooks = () => ({
    type: REQUEST_INITIAL_BOOKS,
});

export const receiveInitialBooks = books => ({
    type: RECEIVE_INITIAL_BOOKS,
    payload: {
        books,
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

export const receiveDesignationBooks = ({ books, designationID, page }) => ({
    type: RECEIVE_DESIGNATION_BOOKS,
    payload: {
        books,
        designationID,
        page,
    },
});

export const requestDesignationPages = ({
    pages = [],
    designation_id = 0,
} = {}) => ({
    type: REQUEST_DESIGNATION_PAGES,
    payload: {
        pages,
        designation_id,
    },
});

export const receiveDesignationPages = designationPages => ({
    type: RECEIVE_DESIGNATION_PAGES,
    payload: {
        designationPages,
    },
});

export const setLastPageIndex = ({ designation_id, lastPageIndex }) => ({
    type: SET_LAST_PAGE_INDEX,
    payload: {
        designation_id,
        lastPageIndex,
    },
});
