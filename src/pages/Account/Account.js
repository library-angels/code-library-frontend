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

    const handleRequestExtension = id => {
        setShowID(id);
        toggleShowModal();
    };

    const currentBook = useSelector(store => {
        const { index, cache } = store.booksCollection;

        const { designation_id, page, pageIndex } = index[showID] || {};

        if (cache[designation_id]) {
            if (cache[designation_id][page]) {
                return cache[designation_id][page][pageIndex] || null;
            }
        }

        return null;
    });

    const designations = useSelector(
        store => store.booksCollection.designations,
    );
    const cache = useSelector(store => {
        return Object.keys(designations).map(designationID =>
            store.booksCollection.cache[designationID]
                ? store.booksCollection.cache[designationID][0]
                : [],
        );
    });

    return (
        <Box margin="calc(80px + 2em) auto" maxWidth="760px">
            <ProfilePic />
            {cache.length > 0 &&
                [
                    { title: 'Borrowing', books: cache[0] },
                    { title: 'Waiting List', books: cache[1] },
                    { title: 'History', books: cache[2] },
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
