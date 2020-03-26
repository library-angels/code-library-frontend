import React from 'react';
import { Box, Spinner } from '@chakra-ui/core';

import BookCarousel from '../../components/BookCarousel';

import useBooks from '../../hooks/books';

function Dashboard() {
    const {
        get: { dashboard },
    } = useBooks();
    const categories = Object.keys(dashboard);

    return (
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
                    />
                ))
            )}
        </Box>
    );
}

export default Dashboard;
