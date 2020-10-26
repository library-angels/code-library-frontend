import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { Box, Flex, Spinner } from '@chakra-ui/core';

import { BookCategory } from '../../components/Book';

import Pagination from './Pagination';
import { useBooksDispatch, useDesignationBooks } from '../../hooks/books';

function getPage(query) {
    return Number(query.split('=')[1]);
}

export default function Category() {
    const { search } = useLocation();
    const { designation_id } = useParams();
    const page = getPage(search);
    const { loadDesignationPages } = useBooksDispatch();

    useEffect(() => {
        loadDesignationPages({ page, designation_id });
        // eslint-disable-next-line
    }, [search]);

    const { designationBooks, lastPageIndex } = useDesignationBooks({
        page,
        designation_id,
    });

    return (
        <Box marginTop={['calc(75px + 2em)', 'calc(95px + 2em)']}>
            <Flex direction="column" alignItems="center">
                {designationBooks.length <= 0 ? (
                    <Spinner marginTop="3rem" />
                ) : (
                    <>
                        <Flex
                            justifyContent="flex-start"
                            wrap="wrap"
                            maxWidth="1024px"
                        >
                            {designationBooks.map(
                                ({ author, title, cover }) => (
                                    <BookCategory
                                        key={`${title} ${cover}`}
                                        author={author || 'John Doe'}
                                        title={title}
                                        cover={cover}
                                    />
                                ),
                            )}
                        </Flex>
                        <Pagination
                            lastPageIndex={lastPageIndex}
                            page={page}
                            designationID={designation_id}
                            postsPerPage={20}
                        />
                    </>
                )}
            </Flex>
        </Box>
    );
}
