import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import { Box, Flex, Spinner } from '@chakra-ui/core';
import { requestDesignationPages } from '../../store/books/books.actions';

import { Search } from '../../components/Navigation';
import { BookCategory } from '../../components/Book';

import Pagination from './Pagination';

import { useSearchSelector, useSearchDispatch } from '../../hooks/search';

function getPage(query) {
    return Number(query.split('=')[1]);
}

export default function Category() {
    const { designation_id: designationID } = useParams();
    const { search } = useLocation();

    const dispatch = useDispatch();
    const page = getPage(search);

    useEffect(() => {
        const pages = page <= 2 ? [1, 2, 3, 4, 5] : [page, page + 1, page + 2];

        dispatch(
            requestDesignationPages({
                pages,
                designation_id: designationID,
            }),
        );
    }, [search]);

    const { allFields, currentField } = useSearchSelector();
    const { setInput, setSelected } = useSearchDispatch();

    const designationBooks = useSelector(store => {
        if (store.booksCollection.cache[designationID] !== undefined) {
            return store.booksCollection.cache[designationID][page] || [];
        }

        return [];
    });

    const lastPageIndex = useSelector(store => {
        if (store.booksCollection.cache[designationID] !== undefined) {
            return store.booksCollection.cache[designationID].lastPageIndex;
        }

        return null;
    });

    return (
        <Box marginTop="calc(80px + 2em)">
            <Search
                currentOption={currentField}
                allOptions={allFields}
                onSelectOption={setSelected}
                onSearchInput={setInput}
            />
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
                            designationID={designationID}
                            postsPerPage={20}
                        />
                    </>
                )}
            </Flex>
        </Box>
    );
}
