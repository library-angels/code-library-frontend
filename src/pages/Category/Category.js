import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Box, Flex, Spinner } from '@chakra-ui/core';

import { Search } from '../../components/Navigation';
import { BookCategory } from '../../components/Book';

import { useSearchSelector, useSearchDispatch } from '../../hooks/search';

export default function Category() {
    const { designation_id: designationID } = useParams();

    const { allFields, currentField } = useSearchSelector();
    const { setInput, setSelected } = useSearchDispatch();

    const designationBooks = useSelector(
        store => store.booksCollection.designationBooks,
    );

    const currentDesignationBooks =
        Object.keys(designationBooks).length > 0
            ? Object.keys(designationBooks[designationID]).reduce(
                  (acc, bookID) => {
                      return [...acc, designationBooks[designationID][bookID]];
                  },
                  [],
              )
            : [];

    return (
        <Box marginTop="calc(80px + 2em)">
            <Search
                currentOption={currentField}
                allOptions={allFields}
                onSelectOption={setSelected}
                onSearchInput={setInput}
            />
            <Flex direction="column" alignItems="center">
                <Flex justifyContent="flex-start" wrap="wrap" maxWidth="1024px">
                    {currentDesignationBooks.length <= 0 ? (
                        <Spinner marginTop="3rem" />
                    ) : (
                        currentDesignationBooks.map(
                            ({ author = 'John Doe', title, cover }, index) => (
                                <BookCategory
                                    key={`${title}${index}`}
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
