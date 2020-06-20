/* eslint-disable max-len */
import React from 'react';
import { Box, Image } from '@chakra-ui/core';
import { Redirect } from 'react-router-dom';
import { useLoginSelector, useLogintDispatch } from '../../hooks/login';
import './style.css';
import logo from '../../static/codelibrarylogo.png';

export default function Login() {
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
                <Box className="Login">
                    <Box>
                        <Box className="loginlogo">
                            <Image src={logo} alt="code library logo" />
                        </Box>
                        <Box
                            id="customBtn"
                            className="customGPlusSignIn"
                            onClick={handleClick}
                            onKeyDown={handleClick}
                            role="button"
                            tabIndex={0}
                        >
                            <Box as="span" className="icon" />
                            <Box as="span" className="buttonText">
                                Sign in with Google
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}
        </>
    );
}
