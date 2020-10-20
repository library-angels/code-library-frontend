/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, PseudoBox, Image, Skeleton } from '@chakra-ui/core';
import testing_missing_cover from '../../static/testing_missing_cover.png';
import transparent from '../../static/transparent.png';

export default function BookSearch({
    id,
    author,
    title,
    cover,
    layout,
    handleRequestExtension,
}) {
    const [loading, setLoading] = useState(false);
    const [ImageFallBack, setImageFallBack] = useState(false);
    const { flexDirection, mr, width } = layout;
    return (
        <PseudoBox
            display="flex"
            flexDirection={flexDirection}
            m="0 12px 40px"
            w={width}
        >
            {/* Image Container */}
            <Skeleton isLoaded={loading}>
                <Flex>
                    <PseudoBox
                        tabIndex="0"
                        _focus={{ outline: '4px solid #8ec2ed' }}
                    >
                        <Image
                            src={`https://library.code.berlin/static/book_cover/${cover}.jpg`}
                            alt={title}
                            id={id}
                            border="1px solid black"
                            w="100%"
                            maxW="180px"
                            maxHeight="230px"
                            mr={mr}
                            onLoad={() => {
                                setLoading(true);
                            }}
                            onError={() => {
                                setLoading(true);
                                setImageFallBack(true);
                            }}
                            onClick={
                                mr === '0px'
                                    ? () => {
                                          handleRequestExtension(id);
                                      }
                                    : null
                            }
                            fallbackSrc={
                                ImageFallBack
                                    ? testing_missing_cover
                                    : transparent
                            }
                        />
                    </PseudoBox>
                </Flex>
            </Skeleton>

            {/* Info Container */}
            <Flex flex="1" direction="column">
                <Flex
                    width="100%"
                    fontWeight="bold"
                    fontSize="16px"
                    flexGrow="1"
                >
                    <Box
                        as="span"
                        textAlign="start"
                        tabIndex="0"
                        aria-describedby={`title :${title}`}
                    >
                        <Skeleton
                            m={loading ? '0px' : '10px 0'}
                            isLoaded={loading}
                        >
                            {title}
                        </Skeleton>
                    </Box>
                </Flex>

                <Flex width="100%" fontSize="13px" flexGrow="1">
                    <Box as="span" textAlign="start" tabIndex="0">
                        <Skeleton
                            m={loading ? '0px' : '10px 0'}
                            isLoaded={loading}
                        >
                            {author}
                        </Skeleton>
                    </Box>
                </Flex>

                {mr === '20px' && (
                    <Flex
                        flexGrow="8"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                        _hover={{
                            color: 'white',
                            background: 'black',
                            borderColor: 'white',
                        }}
                        textDecoration="underline"
                        id={id}
                    >
                        <Flex
                            onClick={() => {
                                handleRequestExtension(id);
                            }}
                        >
                            <Skeleton
                                m={loading ? '0px' : '10px 0'}
                                isLoaded={loading}
                            >
                                More info
                            </Skeleton>
                        </Flex>
                    </Flex>
                )}
            </Flex>
        </PseudoBox>
    );
}

BookSearch.propTypes = {
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.number.isRequired,
    layout: PropTypes.shape({
        width: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string),
        ]),
        flexDirection: PropTypes.string,
        mr: PropTypes.string,
    }).isRequired,
    handleRequestExtension: PropTypes.func.isRequired,
};
