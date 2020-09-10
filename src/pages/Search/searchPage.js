import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Box, Flex, Spinner } from '@chakra-ui/core';

import { BookSearch, BookLayout } from '../../components/Book';

import Pagination from '../Category/Pagination';
import {
    useFilterDispatch,
    useSearchSelector,
    useSearchSelectedOptionDispatch,
} from '../../hooks/search';

import { useAccountDispatch, useAccountSelector } from '../../hooks/account';

import { useBookByID } from '../../hooks/books';
import { RequestExtention } from '../../components/Account';
import { SearchTags } from '../../components/Navigation';

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
    const {
        selectedOptions,
        submitSelectedOption,
    } = useSearchSelectedOptionDispatch();
    const { setShowID, toggleShowModal } = useAccountDispatch();
    const { showID, showModal } = useAccountSelector();
    const selectedBook = useBookByID({ id: showID });

    useEffect(() => {
        requestFilteredList();
        // eslint-disable-next-line
    }, [submitedFilterOption]);
    const searchLayout = {
        gridLayout: {
            width: ['130px', '180px'],
            flexDirection: 'column',
            mr: '0px',
        },
        listLayout: {
            width: '100%',
            flexDirection: 'raw',
            mr: '20px',
        },
    };
    const filteredOptions = (value, option) => {
        selectedOptions(value, option);
        submitSelectedOption();
    };
    const handleRequestExtension = id => {
        setShowID(id);
        toggleShowModal();
    };

    const [layout, setLayout] = useState(searchLayout.gridLayout);

    return (
        <Box marginTop={['calc(75px + 2em)', 'calc(95px + 2em)']}>
            <Flex direction="column" alignItems="center">
                {Object.keys(filteredBooks.result) <= 0 ? (
                    <Spinner marginTop="3rem" />
                ) : (
                    <>
                        <Flex
                            maxWidth="1200px"
                            w="100%"
                            justifyContent="space-between"
                        >
                            <SearchTags filteredOptions={filteredOptions} />
                            <BookLayout
                                setLayout={setLayout}
                                layout={layout}
                                searchLayout={searchLayout}
                            />
                        </Flex>
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
                                        layout={layout}
                                        id={id}
                                        handleRequestExtension={
                                            handleRequestExtension
                                        }
                                    />
                                ),
                            )}
                            {showModal && selectedBook && (
                                <RequestExtention
                                    book={selectedBook}
                                    onModalClose={toggleShowModal}
                                />
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
