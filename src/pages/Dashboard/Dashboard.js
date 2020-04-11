import React from 'react';
import { Box, Spinner } from '@chakra-ui/core';

import { Search } from '../../components/Navigation';
import { BookCarousel } from '../../components/Book';

import useSearch from '../../hooks/search';
import useBooksByCategory from '../../hooks/books';
import { createLinks } from '../../routes';

function Dashboard() {
    const {
        getDashboard: dashboard,
        getCategories: categories,
    } = useBooksByCategory();

    const { getField, getFields, setField, setInput } = useSearch();

    return (
        <Box marginTop="calc(80px + 2em)">
            <Search
                currentOption={getField}
                allOptions={getFields}
                onSelectOption={setField}
                onSearchInput={setInput}
            />
            <Box textAlign="center" marginBottom="3rem">
                {categories
                    .map(c => dashboard[c].length)
                    .reduce((acc, len) => acc + len, 0) <= 0 ? (
                    <Spinner marginTop="3rem" />
                ) : (
                    categories.map(category => (
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
