import React from 'react';
import { Box } from '@chakra-ui/core';

import {
    ProfilePic,
    ProfileCarousel,
    RequestExtention,
} from '../../components/Account';

import data from '../../library.json';

import { useSetShowID, useToggleModal } from '../../hooks/account';

import { useGetBookById } from '../../hooks/books';

function Account() {
    const { getModal, setModal } = useToggleModal();
    const { getShowID, setShowID } = useSetShowID();

    const selectedBook = useGetBookById(getShowID);

    const handleRequestExtension = id => {
        setShowID(id);
        setModal();
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
            {getModal && selectedBook && (
                <RequestExtention book={selectedBook} onModalClose={setModal} />
            )}
        </Box>
    );
}

export default Account;
