export const REQUEST_DESIGNATIONS = 'REQUEST_DESIGNATIONS';
export const RECEIVE_DESIGNATIONS = 'RECEIVE_DESIGNATIONS';
export const REQUEST_INITIAL_BOOKS = 'REQUEST_INITIAL_BOOKS';
export const RECEIVE_INITIAL_BOOKS = 'RECEIVE_INITIAL_BOOKS';
export const REQUEST_DESIGNATION_BOOKS = 'REQUEST_DESIGNATION_BOOKS';
export const RECEIVE_DESIGNATION_BOOKS = 'RECEIVE_DESIGNATION_BOOKS';

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
    designation_id = 0,
} = {}) => ({
    type: REQUEST_DESIGNATION_BOOKS,
    payload: {
        offset,
        limit,
        designation_id,
    },
});

export const receiveDesignationBooks = books => ({
    type: RECEIVE_DESIGNATION_BOOKS,
    payload: {
        books,
    },
});
