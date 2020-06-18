/* eslint-disable max-len */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useLoginSelector, useLogintDispatch } from '../../hooks/login';
import './style.css';
import logo from '../../static/codelibrarylogo.png';

function Login() {
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
                <div className="Login">
                    <div>
                        <div className="loginlogo">
                            <img src={logo} alt="code library logo" />
                        </div>
                        <div
                            id="customBtn"
                            className="customGPlusSignIn"
                            onClick={handleClick}
                            onKeyDown={handleClick}
                            role="button"
                            tabIndex={0}
                        >
                            <span className="icon" />
                            <span className="buttonText">
                                Sign in with Google
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Login;
