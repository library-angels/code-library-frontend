import React from 'react';
import { Box, Image } from '@chakra-ui/core';
import logo from '../../static/codelibrarylogo.png';

export default function CodeLibraryLogo() {
    return (
        <Box w="200px" h="45px" mb="2vh">
            <Image src={logo} alt="code library logo" />
        </Box>
    );
}
