import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Spinner } from '@chakra-ui/core';

import { Search } from '../../components/Navigation';
import DesignationsCarousel from './DesignationsCarousel';

import { useSearchSelector, useSearchDispatch } from '../../hooks/search';

function Dashboard() {
    const designations = useSelector(
        store => store.booksCollection.designations,
    );

    const designationBooks = useSelector(store =>
        Object.keys(designations).map(designationID => {
            const designation = designations[designationID];
            const designationPages = store.booksCollection.cache[designationID];

            return {
                designation,
                designationID,
                books: designationPages ? designationPages[0] : [],
            };
        }),
    );

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
                {designationBooks.length <= 0 ? (
                    <Spinner marginTop="3rem" />
                ) : (
                    <DesignationsCarousel designationBooks={designationBooks} />
                )}
            </Box>
        </Box>
    );
}

export default Dashboard;
