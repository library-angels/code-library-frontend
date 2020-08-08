import { USER_ACTIONS } from './user.actions';

const { USER_DETAILS, RESET_USER_DATA } = USER_ACTIONS;

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    profilePic: '',
};

function updateObject(state, action) {
    return {
        ...state,
        ...action.payload,
    };
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER_DETAILS: {
            return updateObject(state, action);
        }
        case RESET_USER_DATA: {
            return updateObject(state, action);
        }

        default:
            return state;
    }
}
