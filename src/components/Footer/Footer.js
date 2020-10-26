import React from 'react';
import { Flex } from '@chakra-ui/core';

export default function Footer() {
    return (
        <Flex
            height={['40px', '60px']}
            width="100%"
            align="center"
            flexDirection="row-reverse"
            background="black"
        >
            <Flex mr="1rem" color="white">
                V2.0
            </Flex>
        </Flex>
    );
}
