const REQUEST = 'BOOKS_REQUEST';
const RECEIVE = 'BOOKS_RECEIVE';
const REQUEST_DESIGNATIONS = 'BOOKS_REQUEST_DESIGNATIONS';
const RECEIVE_DESIGNATIONS = 'BOOKS_RECEIVE_DESIGNATIONS';
const REQUEST_DESIGNATION_GROUPS = 'BOOKS_REQUEST_DESIGNATION_GROUPS';
const RECEIVE_DESIGNATION_GROUPS = 'BOOKS_RECEIVE_DESIGNATION_GROUPS';

const request = () => ({
    type: REQUEST,
});

const receive = books => ({
    type: RECEIVE,
    payload: {
        books,
    },
});

const requestDesignations = () => ({
    type: REQUEST_DESIGNATIONS,
});

const receiveDesignations = designations => ({
    type: RECEIVE_DESIGNATIONS,
    payload: {
        designations,
    },
});

const requestDesignationGroups = () => ({
    type: REQUEST_DESIGNATION_GROUPS,
});

const receiveDesignationGroups = groups => ({
    type: RECEIVE_DESIGNATION_GROUPS,
    payload: {
        groups,
    },
});

export const BOOKS_ACTIONS = {
    REQUEST,
    RECEIVE,
    REQUEST_DESIGNATIONS,
    RECEIVE_DESIGNATIONS,
    REQUEST_DESIGNATION_GROUPS,
    RECEIVE_DESIGNATION_GROUPS,
};

export const BOOKS_ACTION_CREATORS = {
    request,
    receive,
    requestDesignations,
    receiveDesignations,
    requestDesignationGroups,
    receiveDesignationGroups,
};
