// eslint-disable-next-line react-hooks/exhaustive-deps
import React from 'react';
import { Box, Spinner } from '@chakra-ui/core';
import { useAccountDispatch, useAccountSelector } from '../../hooks/account';
import { useBooksSelector, useBookByID } from '../../hooks/books';

import { RequestExtention } from '../../components/Account';
import DesignationsCarousel from './DesignationsCarousel';

function Dashboard() {
    const { setShowID, toggleShowModal } = useAccountDispatch();
    const { showID, showModal } = useAccountSelector();
    const { dashboardBooks } = useBooksSelector();
    const selectedBook = useBookByID({ id: showID });
    const handleRequestExtension = id => {
        setShowID(id);
        toggleShowModal();
    };

    return (
        <Box marginTop={['calc(75px + 2em)', 'calc(95px + 2em)']}>
            <Box textAlign="center" marginBottom="3rem">
                {dashboardBooks.length <= 0 ? (
                    <Spinner marginTop="3rem" />
                ) : (
                    <DesignationsCarousel
                        designationBooks={dashboardBooks}
                        onDashboardCarouselBookClick={handleRequestExtension}
                    />
                )}
            </Box>
            {showModal && selectedBook && (
                <RequestExtention
                    book={selectedBook}
                    onModalClose={toggleShowModal}
                />
            )}
        </Box>
    );
}

export default Dashboard;
