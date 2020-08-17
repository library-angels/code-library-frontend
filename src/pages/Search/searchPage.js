import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Box, Flex, Spinner } from '@chakra-ui/core';

import { BookSearch } from '../../components/Book';

import Pagination from '../Category/Pagination';
import { useFilterDispatch, useSearchSelector } from '../../hooks/search';

export default function SearchPage() {
    const { search } = useLocation();

    function getPage(query) {
        return Number(query.split('=')[1]);
    }
    const page = getPage(search);

    const { requestFilteredList } = useFilterDispatch();
    const {
        submitedFilterOption,
        filteredBooks,
        LastPageIndex,
    } = useSearchSelector();

    useEffect(() => {
        requestFilteredList();
        // eslint-disable-next-line
    }, [submitedFilterOption]);

    return (
        <Box marginTop={['calc(75px + 2em)', 'calc(95px + 2em)']}>
            <Flex direction="column" alignItems="center">
                {Object.keys(filteredBooks.result) <= 0 ? (
                    <Spinner marginTop="3rem" />
                ) : (
                    <>
                        <Flex
                            key="SearchPage"
                            justifyContent="center"
                            wrap="wrap"
                            maxWidth="1280px"
                        >
                            {filteredBooks.result[page].map(
                                ({ id, author, title, cover }) => (
                                    <BookSearch
                                        key={`${cover}Search${id}`}
                                        author={author || 'John Doe'}
                                        title={title}
                                        cover={cover}
                                    />
                                ),
                            )}
                        </Flex>
                        <Pagination
                            lastPageIndex={LastPageIndex}
                            page={page}
                            postsPerPage={20}
                        />
                    </>
                )}
            </Flex>
        </Box>
    );
}
