import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '@chakra-ui/core';
import LoginButton from './LoginButton';
import CodeLibraryLogo from './CodeLibraryLogo';

export default function Login({ onButtonClick }) {
    return (
        <Flex w="100%" h="100vh" justify="center" align="center">
            <Box>
                <CodeLibraryLogo />
                <LoginButton onClick={onButtonClick} />
            </Box>
        </Flex>
    );
}

Login.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
};
