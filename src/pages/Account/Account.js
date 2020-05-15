import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/core';

import {
    ProfilePic,
    ProfileCarousel,
    RequestExtention,
} from '../../components/Account';

import { useAccountDispatch, useAccountSelector } from '../../hooks/account';

function Account() {
    const { showID, showModal } = useAccountSelector();
    const { setShowID, toggleShowModal } = useAccountDispatch();

    const currentBook = useSelector(store => {
        const { designationBooks } = store.booksCollection;

        return Object.keys(designationBooks).reduce((acc, designationID) => {
            if (designationBooks[designationID][showID] !== undefined) {
                return designationBooks[designationID][showID];
            }

            return acc;
        }, null);
    });

    const handleRequestExtension = id => {
        setShowID(id);
        toggleShowModal();
    };

    const data = useSelector(store =>
        Object.keys(store.booksCollection.designationBooks).length > 0
            ? Object.keys(store.booksCollection.designationBooks[6]).map(
                  bookID => store.booksCollection.designationBooks[6][bookID],
              )
            : [],
    );

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
