import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { Box, Flex, Spinner } from '@chakra-ui/core';

import { Search } from '../../components/Navigation';
import { BookCategory } from '../../components/Book';

import Pagination from './Pagination';
import {
    useBooksDispatch,
    useDesignationBooks,
    useDashboardHeightDispatch,
} from '../../hooks/books';

import {
    useSearchSelector,
    useSearchDispatch,
    useSearchSelectedOptionDispatch,
    useSearchPubFilterDispatch,
} from '../../hooks/search';

function getPage(query) {
    return Number(query.split('=')[1]);
}

export default function Category() {
    const { search } = useLocation();
    const { designation_id } = useParams();
    const {
        selectedOptions,
        submitSelectedOption,
        toggleObjects,
    } = useSearchSelectedOptionDispatch();
    const { updatePublisherFilter } = useSearchPubFilterDispatch();
    const {
        publisherInputTerm,
        searchDetails,
        selectedFilterOptions,
        submitedFilterOption,
    } = useSearchSelector();
    const { changePageHeight, pageHeight } = useDashboardHeightDispatch();
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

    const filterPublisherInput = e => {
        e.preventDefault();
        const searchedTerm = e.target.value;
        updatePublisherFilter(searchedTerm);
    };

    const filteredOptions = (value, option) => {
        selectedOptions(value, option);
    };

    const filterModalBackground = value => {
        if (value) {
            const HTMLheight = document.getElementsByTagName('html')[0]
                .scrollHeight;
            changePageHeight(`${HTMLheight}px`);
        } else {
            changePageHeight('0px');
        }
    };
    const { setInput } = useSearchDispatch();
    return (
        <Box marginTop={['calc(75px + 2em)', 'calc(95px + 2em)']}>
            <Search
                onSearchInput={setInput}
                searchDetails={searchDetails}
                filteredOptions={filteredOptions}
                filterPublisherInput={filterPublisherInput}
                selectedFilterOptions={selectedFilterOptions}
                filterModalBackground={filterModalBackground}
                publisherInputTerm={publisherInputTerm}
                pageHeight={pageHeight}
                submitSelectedOption={submitSelectedOption}
                submitedFilterOption={submitedFilterOption}
                toggleObjects={toggleObjects}
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
                            designationID={designation_id}
                            postsPerPage={20}
                        />
                    </>
                )}
            </Flex>
        </Box>
    );
}
