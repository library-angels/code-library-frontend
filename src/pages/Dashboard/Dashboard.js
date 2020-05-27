import React from 'react';
import { Box, Spinner } from '@chakra-ui/core';

import { Search } from '../../components/Navigation';
import DesignationsCarousel from './DesignationsCarousel';

import { useBooksSelector } from '../../hooks/books';

import { useSearchSelector, useSearchDispatch } from '../../hooks/search';

function Dashboard() {
    const { dashboardBooks } = useBooksSelector();

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
                {dashboardBooks.length <= 0 ? (
                    <Spinner marginTop="3rem" />
                ) : (
                    <DesignationsCarousel designationBooks={dashboardBooks} />
                )}
            </Box>
        </Box>
    );
}

export default Dashboard;
