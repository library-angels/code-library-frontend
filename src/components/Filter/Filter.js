import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MenuList, Tabs, TabPanels, TabPanel } from '@chakra-ui/core';
import TabOption from './TapOption';
import TabPanelOptions from './TapPanelOptions';
import TapMainCategories from './TapMainCategories';

export default function Filter({
    searchDetails,
    filteredOptions,
    filterPublisherInput,
    selectedFilterOptions,
    setShowArrow,
    filterModalBackground,
    publisherInputTerm,
    submitSelectedOption,
    submitedFilterOption,
    toggleObjects,
}) {
    const [tabIndex, setTabIndex] = useState(0);
    const [displayTap, setDisplayTap] = useState('');

    return (
        <MenuList
            minWidth={['210px', '210px', '260px']}
            mr={['3rem']}
            mt="1rem !important"
            borderRadius="10px"
            padding="0px"
        >
            <Tabs index={tabIndex} variant="unstyled">
                <TabOption
                    displayTap={displayTap}
                    setTabIndex={setTabIndex}
                    setDisplayTap={setDisplayTap}
                    setShowArrow={setShowArrow}
                    filterModalBackground={filterModalBackground}
                />
                <TabPanels>
                    <TabPanel>
                        <TapMainCategories
                            searchDetails={Object.keys(searchDetails)}
                            setTabIndex={setTabIndex}
                            setDisplayTap={setDisplayTap}
                            selectedFilterOptions={selectedFilterOptions}
                            submitedFilterOption={submitedFilterOption}
                        />
                    </TabPanel>

                    <TabPanel>
                        {displayTap && (
                            <TabPanelOptions
                                key={`TabPanelOptions${displayTap}`}
                                displayTap={displayTap}
                                searchDetails={searchDetails[displayTap]}
                                filterPublisherInput={filterPublisherInput}
                                selectedFilterOptions={selectedFilterOptions}
                                filteredOptions={filteredOptions}
                                publisherInputTerm={publisherInputTerm}
                                setTabIndex={setTabIndex}
                                setDisplayTap={setDisplayTap}
                                submitSelectedOption={submitSelectedOption}
                                toggleObjects={toggleObjects}
                            />
                        )}
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </MenuList>
    );
}
Filter.propTypes = {
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
    setShowArrow: PropTypes.func.isRequired,
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
};
