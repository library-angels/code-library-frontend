import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Spinner } from '@chakra-ui/core';

import { Search } from '../../components/Navigation';
import { DashboardDesignationsCarousel } from '../../components/Dashboard';

import { useSearchSelector, useSearchDispatch } from '../../hooks/search';

function Dashboard() {
    const designations = useSelector(
        store => store.booksCollection.designations,
    );

    const designationBooks = useSelector(
        store => store.booksCollection.designationBooks,
    );

    const designationIDs = Object.keys(designations);

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
                {designationIDs.length <= 0 ? (
                    <Spinner marginTop="3rem" />
                ) : (
                    <DashboardDesignationsCarousel
                        designations={designations}
                        designationIDs={designationIDs}
                        designationBooks={designationBooks}
                    />
                )}
            </Box>
        </Box>
    );
}

export default Dashboard;
