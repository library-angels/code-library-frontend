import React from 'react';
import { useParams } from 'react-router-dom';

import { Box, Flex, Spinner } from '@chakra-ui/core';

import { Search } from '../../components/Navigation';
import { BookCategory } from '../../components/Book';

import useSearch from '../../hooks/search';
import useBooksByCategory from '../../hooks/books';

export default function Category() {
    const { department } = useParams();
    const { useGetByCategory } = useBooksByCategory();

    const { getField, getFields, setField, setInput } = useSearch();

    const category = useGetByCategory(department);

    return (
        <Box marginTop="calc(80px + 2em)">
            <Search
                currentOption={getField}
                allOptions={getFields}
                onSelectOption={setField}
                onSearchInput={setInput}
            />

            <Flex direction="column" alignItems="center">
                <Flex justifyContent="center" wrap="wrap" maxWidth="1024px">
                    {category.length <= 0 ? (
                        <Spinner marginTop="3rem" />
                    ) : (
                        category.map(({ author, title1: title, cover }) => (
                            <BookCategory
                                author={author}
                                title={title}
                                cover={cover}
                            />
                        ))
                    )}
                </Flex>
            </Flex>
        </Box>
    );
}
