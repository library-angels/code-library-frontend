import produce from 'immer';

import {
    RECEIVE_DESIGNATIONS,
    RECEIVE_DESIGNATION_BOOKS,
    SET_LAST_PAGE_INDEX,
} from './books.actions';

const initialState = {
    designations: {},
    cache: {},
    index: {},
};

export default function booksReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case RECEIVE_DESIGNATION_BOOKS: {
                const { books, designation_id, page } = action.payload;

                if (draft.cache[designation_id] === undefined) {
                    draft.cache[designation_id] = {
                        lastPageIndex: null,
                    };
                }

                draft.cache[designation_id][page] = books;

                // add each books 'location' to the index

                // eslint-disable-next-line no-shadow
                books.forEach(({ id, designation_id }, i) => {
                    draft.index[id] = {
                        designation_id,
                        page,
                        pageIndex: i,
                    };
                });

                return draft;
            }
            case RECEIVE_DESIGNATIONS: {
                action.payload.designations.forEach(({ id, name }) => {
                    draft.designations[id] = name;
                });

                return draft;
            }
            case SET_LAST_PAGE_INDEX: {
                const { designation_id, lastPageIndex } = action.payload;

                draft.cache[designation_id].lastPageIndex = lastPageIndex;

                return draft;
            }
            default:
                return draft;
        }
    });
}
