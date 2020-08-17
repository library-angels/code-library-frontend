import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Search from './Search';

export default function TopPage({
    src,
    onSearchInput,
    searchDetails,
    filteredOptions,
    filterPublisherInput,
    selectedFilterOptions,
    filterModalBackground,
    publisherInputTerm,
    submitSelectedOption,
    pageHeight,
    submitedFilterOption,
    toggleObjects,
}) {
    const location = useLocation();
    return (
        <>
            <NavigationBar src={src} />
            {location.pathname !== '/account' && (
                <Search
                    onSearchInput={onSearchInput}
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
            )}
        </>
    );
}

TopPage.propTypes = {
    src: PropTypes.string.isRequired,
    onSearchInput: PropTypes.func.isRequired,
    searchDetails: PropTypes.shape({
        'Search by': PropTypes.arrayOf(PropTypes.string),
        Category: PropTypes.arrayOf(PropTypes.string),
        Series: PropTypes.arrayOf(PropTypes.string),
        Publishers: PropTypes.arrayOf(PropTypes.string),
        'Sort by': PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    filteredOptions: PropTypes.func.isRequired,
    filterPublisherInput: PropTypes.func.isRequired,
    selectedFilterOptions: PropTypes.objectOf(
        PropTypes.arrayOf(PropTypes.string),
    ).isRequired,

    filterModalBackground: PropTypes.func.isRequired,
    publisherInputTerm: PropTypes.string.isRequired,
    submitSelectedOption: PropTypes.func.isRequired,
    submitedFilterOption: PropTypes.shape({
        'Search by': PropTypes.arrayOf(PropTypes.string),
        Category: PropTypes.arrayOf(PropTypes.string),
        Series: PropTypes.arrayOf(PropTypes.string),
        Publishers: PropTypes.arrayOf(PropTypes.string),
        'Sort by': PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    toggleObjects: PropTypes.func.isRequired,
    pageHeight: PropTypes.string.isRequired,
};
