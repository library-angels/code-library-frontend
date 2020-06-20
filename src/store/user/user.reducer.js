import { USER_ACTIONS } from './user.actions';

const { USER_DETAILS, RESET_USER_DATA } = USER_ACTIONS;

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    profilePic: '',
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER_DETAILS: {
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                profilePic: action.payload.profilePic,
            };
        }
        case RESET_USER_DATA: {
            return {
                state: undefined,
            };
        }

        default:
            return state;
    }
}
