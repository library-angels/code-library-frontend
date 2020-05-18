import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Box, Flex, Spinner } from '@chakra-ui/core';

import { Search } from '../../components/Navigation';
import { BookCategory } from '../../components/Book';

import Pagination from './Pagination';

import { useSearchSelector, useSearchDispatch } from '../../hooks/search';

export default function Category() {
    const { designation_id: designationID } = useParams();

    const { allFields, currentField } = useSearchSelector();
    const { setInput, setSelected } = useSearchDispatch();

    const designationBooks = useSelector(
        store => store.booksCollection.designationBooks || {},
    );

    // console.log(Object.keys(designationBooks));

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
                {currentDesignationBooks.length <= 0 ? (
                    <Spinner marginTop="3rem" />
                ) : (
                    <Flex
                        justifyContent="flex-start"
                        wrap="wrap"
                        maxWidth="1024px"
                    >
                        {currentDesignationBooks.map(
                            ({ author, title, cover }) => (
                                <BookCategory
                                    key={title}
                                    author={author || 'John Doe'}
                                    title={title}
                                    cover={cover}
                                />
                            ),
                        )}
                        <Pagination
                            designationID={designationID}
                            postsPerPage={20}
                        />
                    </Flex>
                )}
            </Flex>
        </Box>
    );
}
