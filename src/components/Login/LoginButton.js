import React from 'react';
import { Box, Image } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import signInIcon from '../../static/signInIcon.png';

export default function LoginButton({ onClick }) {
    return (
        <Box
            onClick={onClick}
            onKeyDown={onClick}
            role="button"
            tabIndex={0}
            bg="#4285f4"
            color="#444"
            width="200px"
            border="thin solid #4285f4"
            boxShadow="1px 1px 1px grey"
            whiteSpace="nowrap"
            _hover={{ cursor: 'pointer' }}
        >
            <Image
                src={signInIcon}
                display="inline-block"
                verticalAlign="middle"
                w="42px"
                h="42px"
            />
            <Box
                as="span"
                verticalAlign="middle"
                pl="10px"
                pr="25px"
                fontSize="14px"
                fontWeight="bold"
                color="white"
                font
                fontFamily="Roboto,sans-serif"
            >
                Sign in with Google
            </Box>
        </Box>
    );
}

LoginButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};
