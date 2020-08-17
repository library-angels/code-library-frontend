/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import { Box, Flex, PseudoBox, Image, Divider } from '@chakra-ui/core';

export default function BookSearch({ author, title, cover }) {
    return (
        <PseudoBox
            display="flex"
            flexDirection="column"
            alignTtems="center"
            w="190px"
        >
            {/* Image Container */}
            <Flex justifyContent="center" alignItems="center">
                <Image
                    src={`https://library.code.berlin/static/book_cover/${cover}.jpg`}
                    alt={title}
                    border="1px solid black"
                    w="180px"
                    maxHeight="230px"
                />
            </Flex>
            {/* Info Container */}
            <Flex flex="1" direction="column">
                <Flex
                    flex="1"
                    width="100%"
                    fontWeight="bold"
                    fontSize="16px"
                    justifyContent="center"
                >
                    <Box as="span" textAlign="center">
                        {title}
                    </Box>
                </Flex>
                <Divider
                    m="auto"
                    borderColor="black"
                    orientation="horizontal"
                    width="90px"
                />
                <Flex
                    flex="1"
                    width="100%"
                    padding="1em"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box as="span" textAlign="center">
                        {author}
                    </Box>
                </Flex>
            </Flex>
        </PseudoBox>
    );
}

BookSearch.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.number.isRequired,
};
