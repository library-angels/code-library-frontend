import { TOGGLE_ACTIONS } from './toggle.actions';

const { TOGGLE_MODAL } = TOGGLE_ACTIONS;

const initialState = {
    modal: { show: false },
};

function toggle(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MODAL: {
            return {
                ...state,
                modal: { ...state.modal, show: !state.modal.show },
            };
        }
        default:
            return state;
    }
}

export default toggle;
