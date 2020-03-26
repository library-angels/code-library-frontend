import React from 'react';
import PropTypes from 'prop-types';

import { Flex, PseudoBox, Image, Divider } from '@chakra-ui/core';

export default function CateroryBook({ author, title, cover }) {
    return (
        <PseudoBox
            display="flex"
            alignTtems="center"
            justifyContent="space-between"
            width={['100%', '100%', '100%', 'calc(50% - 2rem)']}
            border="1px solid transparent"
            borderRadius="0.25rem"
            padding="1em"
            margin={['0em', '1em']}
            _hover={{
                borderColor: 'black',
                cursor: 'pointer',
                transition: '200ms ease-in border-color',
            }}
            transition="200ms ease-in border-color"
        >
            {/* Image Container */}
            <Flex justifyContent="center" alignItems="center">
                <Image
                    src={`https://library.code.berlin${cover}`}
                    alt={title}
                    border="1px solid black"
                    maxWidth="100px"
                    maxHeight="150px"
                />
            </Flex>
            {/* Info Container */}
            <Flex
                flex="1"
                direction="column"
                alignItems="flex-start"
                marginLeft="1rem"
            >
                <Flex
                    flex="1"
                    width="100%"
                    padding="1em"
                    justifyContent="flex-start"
                    alignItems="center"
                    fontWeight="bold"
                >
                    <span>{title}</span>
                </Flex>
                <Divider
                    marginLeft="1em"
                    borderColor="black"
                    orientation="horizontal"
                    width="90px"
                />
                <Flex
                    flex="1"
                    width="100%"
                    padding="1em"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <span>{author}</span>
                </Flex>
            </Flex>
        </PseudoBox>
    );
}

CateroryBook.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};
