import configureStore from 'redux-mock-store';
import {
    USERS_REQUEST,
    USERS_ERROR,
    USERS_RECEIVED,
    usersRequest,
    usersError,
    usersReceived,
} from './users.actions';

const middlewares = [];
const mockStore = configureStore(middlewares);

const error = new Error('Users not found');
const users = [
    {
        id: 1,
        name: 'John',
    },
    {
        id: 2,
        name: 'Doe',
    },
];

describe('Users action creators', () => {
    it('should create an action to request users', () => {
        expect(usersRequest()).toEqual({
            type: USERS_REQUEST,
        });
    });

    it('should create an action to set request users error', () => {
        expect(usersError(error)).toEqual({
            type: USERS_ERROR,
            payload: error,
        });
    });

    it('should create an action to receive users', () => {
        expect(usersReceived(users)).toEqual({
            type: USERS_RECEIVED,
            payload: users,
        });
    });
});

describe('Dispatch User actions', () => {
    it('should dispatch actions', () => {
        // Initialize mockstore with empty state
        const initialState = {};
        const store = mockStore(initialState);

        // Dispatch the action
        store.dispatch(usersRequest());
        store.dispatch(usersError(error));
        store.dispatch(usersReceived(users));

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        const expectedPayload = [
            {
                type: USERS_REQUEST,
            },
            {
                type: USERS_ERROR,
                payload: error,
            },
            {
                type: USERS_RECEIVED,
                payload: users,
            },
        ];

        expect(actions).toEqual(expectedPayload);
    });
});
