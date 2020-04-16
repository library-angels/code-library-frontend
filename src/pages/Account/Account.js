import React from 'react';
import { Box } from '@chakra-ui/core';

import {
    ProfilePic,
    ProfileCarousel,
    RequestExtention,
} from '../../components/Account';

import data from '../../library.json';

import { useBookByID } from '../../hooks/books';
import { useAccountDispatch, useAccountSelector } from '../../hooks/account';

function Account() {
    const { showID, showModal } = useAccountSelector();
    const { setShowID, toggleShowModal } = useAccountDispatch();

    const currentBook = useBookByID(showID);

    const handleRequestExtension = id => {
        setShowID(id);
        toggleShowModal();
    };

    return (
        <Box margin="calc(80px + 2em) auto" maxWidth="760px">
            <ProfilePic />
            {[
                { title: 'Borrowing', books: data.slice(0, 5) },
                { title: 'Waiting List', books: data.slice(5, 8) },
                { title: 'History', books: data.slice(8, 20) },
            ].map(({ title, books }) => (
                <ProfileCarousel
                    key={title}
                    onProfileCarouselBookClick={handleRequestExtension}
                    title={title}
                    books={books}
                />
            ))}
            {showModal && currentBook && (
                <RequestExtention
                    book={currentBook}
                    onModalClose={toggleShowModal}
                />
            )}
        </Box>
    );
}

export default Account;
