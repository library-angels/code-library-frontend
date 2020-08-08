// eslint-disable-next-line react-hooks/exhaustive-deps
import React, { useEffect } from 'react';
import { Box, Spinner } from '@chakra-ui/core';
import { useAccountDispatch, useAccountSelector } from '../../hooks/account';
import {
    useBooksSelector,
    useBookByID,
    useDashboardHeightDispatch,
} from '../../hooks/books';
import {
    useSearchSelector,
    useSearchDispatch,
    useSearchPubFilterDispatch,
    useSearchSelectedOptionDispatch,
} from '../../hooks/search';
import { RequestExtention } from '../../components/Account';
import { Search } from '../../components/Navigation';
import DesignationsCarousel from './DesignationsCarousel';

function Dashboard() {
    const { setShowID, toggleShowModal } = useAccountDispatch();
    const { showID, showModal } = useAccountSelector();
    const { dashboardBooks } = useBooksSelector();
    const {
        publisherInputTerm,
        searchDetails,
        selectedFilterOptions,
        submitedFilterOption,
    } = useSearchSelector();
    const { setInput } = useSearchDispatch();
    const selectedBook = useBookByID({ id: showID });
    const { updatePublisherFilter } = useSearchPubFilterDispatch();
    const {
        selectedOptions,
        submitSelectedOption,
        toggleObjects,
    } = useSearchSelectedOptionDispatch();
    const { changePageHeight, pageHeight } = useDashboardHeightDispatch();

    const filterPublisherInput = e => {
        e.preventDefault();
        const searchedTerm = e.target.value;
        updatePublisherFilter(searchedTerm);
    };

    const filteredOptions = (value, option) => {
        selectedOptions(value, option);
    };

    const handleRequestExtension = id => {
        setShowID(id);
        toggleShowModal();
    };

    const filterModalBackground = value => {
        if (value) {
            const HTMLheight = document.getElementsByTagName('html')[0]
                .scrollHeight;
            changePageHeight(`${HTMLheight}px`);
        } else {
            changePageHeight('0px');
        }
    };

    useEffect(() => {
        filterModalBackground(false);
        // eslint-disable-next-line
    }, []);

    return (
        <Box marginTop={['calc(75px + 2em)', 'calc(95px + 2em)']}>
            <Search
                onSearchInput={setInput}
                searchDetails={searchDetails}
                filteredOptions={filteredOptions}
                filterPublisherInput={filterPublisherInput}
                selectedFilterOptions={selectedFilterOptions}
                filterModalBackground={filterModalBackground}
                publisherInputTerm={publisherInputTerm}
                pageHeight={pageHeight}
                submitSelectedOption={submitSelectedOption}
                submitedFilterOption={submitedFilterOption}
                toggleObjects={toggleObjects}
            />
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
