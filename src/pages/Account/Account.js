import React from 'react';
import { Box } from '@chakra-ui/core';

import {
    ProfilePic,
    ProfileCarousel,
    RequestExtention,
} from '../../components/Account';

import { useBookByID, useAccountBooks } from '../../hooks/books';
import { useAccountDispatch, useAccountSelector } from '../../hooks/account';
import { UseUserDetails } from '../../hooks/user';

function Account() {
    const { showID, showModal } = useAccountSelector();
    const { setShowID, toggleShowModal } = useAccountDispatch();
    const { picture, firstname } = UseUserDetails();

    const handleRequestExtension = id => {
        setShowID(id);
        toggleShowModal();
    };

    const accountBooks = useAccountBooks();
    const selectedBook = useBookByID({ id: showID });

    return (
        <Box margin="calc(80px + 2em) auto" maxWidth="760px">
            <ProfilePic src={picture} alt={firstname} text="My Profile" />
            {accountBooks.length > 0 &&
                accountBooks.map(({ title, books }) => (
                    <ProfileCarousel
                        key={title}
                        onProfileCarouselBookClick={handleRequestExtension}
                        title={title}
                        books={books}
                    />
                ))}
            {showModal && selectedBook && (
                <RequestExtention
                    book={selectedBook}
                    onModalClose={toggleShowModal}
                />
            )}
        </Box>
    );
}

export default Account;
