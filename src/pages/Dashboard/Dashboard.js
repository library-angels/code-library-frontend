import React from 'react';
import { Box, Spinner } from '@chakra-ui/core';

import { Search } from '../../components/Navigation';
import { BookCarousel } from '../../components/Book';

import { useSearchSelector, useSearchDispatch } from '../../hooks/search';
import { useBooksSelector } from '../../hooks/books';
import { createLinks } from '../../routes';

function Dashboard() {
    const { dashboard } = useBooksSelector();

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
            <Box textAlign="center" marginBottom="3rem">
                {Object.keys(dashboard).length <= 0 ? (
                    <Spinner marginTop="3rem" />
                ) : (
                    Object.keys(dashboard).map(category => (
                        <BookCarousel
                            key={category}
                            category={category}
                            books={dashboard[category]}
                            buttonLink={createLinks.toCategoryDepartment(
                                category,
                            )}
                        />
                    ))
                )}
            </Box>
        </Box>
    );
}

export default Dashboard;
