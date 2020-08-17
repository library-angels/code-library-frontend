import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Stack,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    IconButton,
    Menu,
    MenuButton,
    Flex,
} from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Filter } from '../Filter';
import { ReactComponent as filtericon } from '../../static/filtericon.svg';

function Search({
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
    const [showArrow, setShowArrow] = useState(false);
    return (
        <Stack
            display="flex"
            position="absolute"
            top="0px"
            width="100%"
            m="auto"
            paddingX={['1rem']}
            zIndex="1"
            background="rgba(0,0,0,0.5)"
            height={pageHeight}
        >
            {/* Search Bar  */}
            <InputGroup
                mt="0.25rem"
                width={['100%', '100%']}
                borderRadius="50px"
                background="#ffffff"
                top="75px"
                position="relative"
                maxW="1024px"
                margin="0 auto"
            >
                <InputLeftElement h="100%">
                    <FontAwesomeIcon icon={faSearch} />
                </InputLeftElement>
                <Input
                    h="30px"
                    placeholder="Search a book"
                    _placeholder={{
                        color: '#6F6F6F',
                    }}
                    onKeyUp={e => onSearchInput(e.target.value)}
                    variant="filled"
                    variantColor="#0D54AB33"
                    border="1px"
                    borderRadius="50px"
                    borderColor="#000000"
                    background="transparent"
                    _focus={{
                        border: '2px',
                        borderColor: '#0D54AB',
                        background: 'transparent',
                    }}
                />
                {/* Seach Options */}
                <InputRightElement h="100%" flexDirection="column" mr="3px">
                    <Menu
                        closeOnSelect={false}
                        maxH="480px"
                        display="flex"
                        background="rgba(0, 0, 0, 0.6)"
                    >
                        <MenuButton
                            maxW="22px"
                            borderRadius="15px"
                            as={IconButton}
                            background="transparent"
                            icon={filtericon}
                            h="80%"
                        />
                        {showArrow && (
                            <Flex flexDirection="row-reverse" h="0px">
                                <Flex
                                    h="0px "
                                    w="0px "
                                    borderLeft="6px solid transparent "
                                    borderRight="6px solid transparent "
                                    borderBottom="18px solid #fdfdfe"
                                    justifyContent="center"
                                />
                            </Flex>
                        )}

                        <Filter
                            searchDetails={searchDetails}
                            filteredOptions={filteredOptions}
                            filterPublisherInput={filterPublisherInput}
                            selectedFilterOptions={selectedFilterOptions}
                            setShowArrow={setShowArrow}
                            filterModalBackground={filterModalBackground}
                            publisherInputTerm={publisherInputTerm}
                            submitSelectedOption={submitSelectedOption}
                            submitedFilterOption={submitedFilterOption}
                            toggleObjects={toggleObjects}
                        />
                    </Menu>
                </InputRightElement>
            </InputGroup>
        </Stack>
    );
}

Search.propTypes = {
    filteredOptions: PropTypes.func.isRequired,
    filterPublisherInput: PropTypes.func.isRequired,
    filterModalBackground: PropTypes.func.isRequired,
    onSearchInput: PropTypes.func.isRequired,
    searchDetails: PropTypes.shape({
        'Search by': PropTypes.arrayOf(PropTypes.string),
        Category: PropTypes.arrayOf(PropTypes.string),
        Series: PropTypes.arrayOf(PropTypes.string),
        Publishers: PropTypes.arrayOf(PropTypes.string),
        'Sort by': PropTypes.arrayOf(PropTypes.string),
    }).isRequired,

    selectedFilterOptions: PropTypes.objectOf(
        PropTypes.arrayOf(PropTypes.string),
    ).isRequired,

    publisherInputTerm: PropTypes.string.isRequired,
    pageHeight: PropTypes.string.isRequired,
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

export default Search;
