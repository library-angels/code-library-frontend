import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersRequest } from '../../store/users/users.actions';
import { getUsers, getUsersError } from '../../store/users/users.selectors';

function useUsers() {
    const dispatch = useDispatch();

    return {
        users: useSelector(getUsers),
        error: useSelector(getUsersError),
        request: () => dispatch(usersRequest()),
    };
}

function Users() {
    const { users, error, request } = useUsers();

    const { status, statusText } = error;

    return (
        <div>
            <h1>Users</h1>
            <button type="button" onClick={request}>
                Fetch Users
            </button>
            {users.length > 0 ? (
                <div>
                    {users.map(({ id, name }) => (
                        <p key={name}>
                            {id} - {name}
                        </p>
                    ))}
                </div>
            ) : (
                <div>{(status && `${status} ${statusText}`) || ''}</div>
            )}
        </div>
    );
}

export default Users;
