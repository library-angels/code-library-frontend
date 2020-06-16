/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import jwt from 'jwt-decode';
import { useLogintDispatch, useLoginSelector } from '../../hooks/login';
import { UserDetailsDispatch } from '../../hooks/user';
import './style.css';
import logo from '../../static/codelibrarylogo.png';

function Login() {
    const { setTokens } = useLogintDispatch();
    const { setUserDetails } = UserDetailsDispatch();
    const { accessToken } = useLoginSelector();

    useEffect(() => {
        const params = {
            client_id:
                '55145421475-5v3b8519i457v6jock86v4t4letfrsju.apps.googleusercontent.com',

            response_type: 'code',
            access_type: 'offline',
            promt: 'consent',
        };
        window.gapi.load('auth2', () => {
            if (!window.gapi.auth2.getAuthInstance()) {
                window.gapi.auth2.init(params);
            }
        });
    }, []);
    const signIn = auth2Responce => {
        const auth_code = JSON.stringify(auth2Responce);
        const serverURL =
            'https://api.dev.library.code.berlin/identity/oauth/authorization_code_exchange/';

        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: auth_code,
        };
        fetch(serverURL, requestOptions).then(res => {
            res.json().then(data => {
                setTokens(data.access_token, data.refresh_token);
                setUserDetails(jwt(data.access_token));
            });
        });
    };

    const handleClick = () => {
        const auth2 = window.gapi.auth2.getAuthInstance();
        auth2.grantOfflineAccess().then(res => {
            signIn(res);
        });
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
