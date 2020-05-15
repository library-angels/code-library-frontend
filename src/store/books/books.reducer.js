import _ from 'lodash';

import {
    RECEIVE_DESIGNATIONS,
    RECEIVE_INITIAL_BOOKS,
    RECEIVE_DESIGNATION_BOOKS,
} from './books.actions';

function groupBooksIntoDesignations(books) {
    const designationsReducer = (acc, book) => {
        const { id: bookID, designation_id: designationID } = book;

        if (acc[designationID] === undefined) {
            acc[designationID] = {};
        }

        acc[designationID][bookID] = book;
        return acc;
    };

    return books.reduce(designationsReducer, {});
}

const initialState = {
    designations: [],
    designationBooks: {},
};

export default function books(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_DESIGNATION_BOOKS: {
            const designationBooks = _.cloneDeep(initialState.designationBooks);

            action.payload.books.forEach(book => {
                const { id: bookID, designation_id: designationID } = book;
                designationBooks[designationID][bookID] = book;
            });

            return {
                ...state,
                designationBooks,
            };
        }
        case RECEIVE_INITIAL_BOOKS: {
            const designationBooks = groupBooksIntoDesignations(
                action.payload.books,
            );

            return {
                ...state,
                designationBooks,
            };
        }
        case RECEIVE_DESIGNATIONS: {
            const { designations } = action.payload;

            return {
                ...state,
                designations,
            };
        }
        default:
            return state;
    }
}
