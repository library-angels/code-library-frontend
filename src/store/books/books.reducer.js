import _ from 'lodash';

import {
    RECEIVE_DESIGNATIONS,
    RECEIVE_INITIAL_BOOKS,
    RECEIVE_DESIGNATION_BOOKS,
    SET_LAST_PAGE_INDEX,
} from './books.actions';

function groupBooksIntoDesignations(booksArray) {
    const designationsReducer = (acc, book) => {
        const { id: bookID, designation_id: designationID } = book;

        if (acc[designationID] === undefined) {
            acc[designationID] = {};
        }

        acc[designationID][bookID] = book;
        return acc;
    };

    return booksArray.reduce(designationsReducer, {});
}

const initialState = {
    designations: {},
    designationBooks: {},
    cache: {},
    index: {},
};

export default function books(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_DESIGNATION_BOOKS: {
            const { cache, index } = state;

            const { books, designationID, page } = action.payload;

            if (cache[designationID] === undefined) {
                cache[designationID] = {
                    lastPageIndex: null,
                };
            }

            cache[designationID][page] = books;

            books.forEach((book, i) => {
                const { id, designation_id: designationID } = book;

                index[id] = {
                    designation_id: designationID,
                    page,
                    i,
                };
            });

            return {
                ...state,
                cache,
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
        case SET_LAST_PAGE_INDEX: {
            const {
                designation_id: designationID,
                lastPageIndex,
            } = action.payload;

            const { cache } = state;

            cache[designationID].lastPageIndex = lastPageIndex;

            return {
                ...state,
                cache,
            };
        }
        default:
            return state;
    }
}
