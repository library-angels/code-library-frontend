import React from 'react';
import { useParams } from 'react-router-dom';

import { Box, Flex, Spinner } from '@chakra-ui/core';

import { Search } from '../../components/Navigation';
import { BookCategory } from '../../components/Book';

import { useSearchSelector, useSearchDispatch } from '../../hooks/search';
import { useCategoryBooks } from '../../hooks/books';

export default function Category() {
    const { department } = useParams();

    const category = useCategoryBooks(department);
    const categoryBooks = Object.keys(category).reduce((acc, id) => {
        acc.push(category[id]);
        return acc;
    }, []);

    const { allFields, currentField } = useSearchSelector();
    const { setInput, setSelected } = useSearchDispatch();

    return (
        <Box marginTop="calc(80px + 2em)">
            <Search
                currentOption={currentField}
                allOptions={allFields}
                onSelectOption={setSelected}
                onSearchInput={setInput}
            />

            <Flex direction="column" alignItems="center">
                <Flex justifyContent="center" wrap="wrap" maxWidth="1024px">
                    {categoryBooks.length <= 0 ? (
                        <Spinner marginTop="3rem" />
                    ) : (
                        categoryBooks.map(
                            ({ author, title1: title, cover }) => (
                                <BookCategory
                                    key={title}
                                    author={author}
                                    title={title}
                                    cover={cover}
                                />
                            ),
                        )
                    )}
                </Flex>
            </Flex>
        </Box>
    );
}
