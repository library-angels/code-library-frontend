import { put, call } from 'redux-saga/effects';
import { createGetUsers } from './users.sagas';
import { usersReceived } from './users.actions';

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

const fetchUsers = () => Promise.resolve(users);

describe('User Sagas test', () => {
    describe('watchUsersRequest Saga test 1', () => {
        const gen = createGetUsers(fetchUsers)();

        it('getUsers Saga must call fetchUsers', () => {
            const got = gen.next().value;
            const want = call(fetchUsers);

            expect(got).toEqual(want);
        });

        it('getUsers Saga must dispatch a usersReceived action', () => {
            const got = gen.next(users).value;
            const want = put(usersReceived(users));

            expect(got).toEqual(want);
        });

        it('getUsers Saga must be done', () => {
            const got = gen.next();
            const want = {
                done: true,
                value: undefined,
            };

            expect(got).toEqual(want);
        });
    });
});
