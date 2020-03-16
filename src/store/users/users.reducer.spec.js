import { usersError, usersReceived } from './users.actions';
import usersReducer from './users.reducer';

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

describe('Users reducer', () => {
    it('should return the initial state', () => {
        const got = usersReducer(undefined, {});
        const want = {
            users: {},
            error: {},
        };

        expect(got).toEqual(want);
    });

    const initialState = {
        users: {},
        error: {},
    };

    it('should handle USERS_ERROR', () => {
        const action = usersError(error);
        const got = usersReducer(initialState, action);

        const want = {
            users: {},
            error,
        };

        expect(got).toEqual(want);
    });

    it('should handle USERS_RECEIVED', () => {
        const action = usersReceived(users);
        const got = usersReducer(initialState, action);

        const want = {
            users,
            error: {},
        };

        expect(got).toEqual(want);
    });
});
