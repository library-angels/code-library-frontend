import { SEARCH_ACTIONS } from './search.actions';

const { SEARCH_INPUT_TYPING, SEARCH_SELECT_FIELD } = SEARCH_ACTIONS;

const initialState = {
    fields: ['Title', 'Author', 'Text'],
    field: 'Title',
    input: null,
};

function search(state = initialState, action) {
    switch (action.type) {
        case SEARCH_INPUT_TYPING: {
            return {
                ...state,
                input: action.payload.input,
            };
        }
        case SEARCH_SELECT_FIELD: {
            return {
                ...state,
                field: action.payload.field,
            };
        }
        default:
            return state;
    }
}

export default search;
