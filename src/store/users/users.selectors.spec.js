import { getUsers, getUsersError } from './users.selectors';

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

describe('Users selectors', () => {
    const store = {
        usersCollection: {
            users,
            error,
        },
    };

    it('should return the users state object', () => {
        const got = getUsers(store);
        const want = users;

        expect(got).toEqual(want);
    });

    it('should return the user errors', () => {
        const got = getUsersError(store);
        const want = error;

        expect(got).toEqual(want);
    });
});
