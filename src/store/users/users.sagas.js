import { put, takeLatest, call } from 'redux-saga/effects';
import { USERS_REQUEST, usersReceived, usersError } from './users.actions';

async function fetchUsers() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');

    if (data.status !== 200) {
        const error = new Error();
        error.status = data.status;
        error.statusText = data.statusText;
        error.name = `Status: ${data.status}\nStatusText: ${data.statusText}`;
        throw error;
    }

    return data.json();
}

export function createGetUsers(fetchUsersFunc) {
    return function*() {
        try {
            const response = yield call(fetchUsersFunc);
            yield put(usersReceived(response));
        } catch (e) {
            yield put(usersError(e));
        }
    };
}

export function* watchUsersRequest() {
    const getUsers = createGetUsers(fetchUsers);

    yield takeLatest(USERS_REQUEST, getUsers);
}
