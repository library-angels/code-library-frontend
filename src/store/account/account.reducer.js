import { ACCOUNT_ACTIONS } from './account.actions';

const { ACCOUNT_TOGGLE_MODAL, ACCOUNT_VIEW_BOOK_DETAILS } = ACCOUNT_ACTIONS;

const initialState = {
    showID: null,
    showModal: false,
};

function account(state = initialState, action) {
    switch (action.type) {
        case ACCOUNT_VIEW_BOOK_DETAILS: {
            return {
                ...state,
                showID: action.payload.id,
            };
        }
        case ACCOUNT_TOGGLE_MODAL: {
            return {
                ...state,
                showModal: !state.showModal,
            };
        }
        default:
            return state;
    }
}

export default account;
