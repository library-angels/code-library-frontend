import { ERROR_ACTIONS } from './errors.actions';

const { ERROR_MESSAGE, ERROR_MESSAGE_RESET } = ERROR_ACTIONS;

const initialState = {
    errorMessage: '',
};

export default function errorReducer(state = initialState, action) {
    switch (action.type) {
        case ERROR_MESSAGE: {
            return {
                errorMessage: action.payload.message,
            };
        }

        case ERROR_MESSAGE_RESET: {
            return {
                errorMessage: '',
            };
        }

        default:
            return state;
    }
}
