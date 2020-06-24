/* eslint-disable max-len */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Login } from '../../components/Login';

import { useLoginSelector, useLogintDispatch } from '../../hooks/login';

export default function LoginPage() {
    const { accessToken } = useLoginSelector();
    const { signInUser } = useLogintDispatch();

    const handleClick = () => {
        signInUser();
    };

    return (
        <>
            {accessToken ? (
                <Redirect to="/" />
            ) : (
                <Login onButtonClick={handleClick} />
            )}
        </>
    );
}
