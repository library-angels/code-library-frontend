import React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Stack,
    Select,
    Input,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search({ currentOption, allOptions, onSelectOption, onSearchInput }) {
    return (
        <Stack
            spacing={1}
            marginTop="calc(80px + 2em)"
            marginX="auto"
            width="100%"
            maxWidth="1024px"
            display="flex"
            flexDirection={['column', 'row', 'row', 'row']}
            justifyContent={[
                'center',
                'space-between',
                'space-between',
                'space-between',
            ]}
            alignItems={['flex-start']}
            paddingX="2rem"
        >
            {/* Search Bar  */}
            <InputGroup width={['100%', '100%']} marginRight={['0', '1em']}>
                <InputLeftElement>
                    <FontAwesomeIcon icon={faSearch} />
                </InputLeftElement>
                <Input
                    placeholder="Which book are you looking for?"
                    onKeyUp={e => onSearchInput(e.target.value)}
                    variant="filled"
                    borderRadius="0"
                    borderBottom="0.125rem solid black"
                    background="transparent"
                    _focus={{
                        borderColor: 'black',
                        borderRadius: '0.25rem',
                    }}
                />
            </InputGroup>
            {/* Seach Options */}
            <Select
                value={currentOption}
                onChange={({ target }) => onSelectOption(target.value)}
                width={['100%', '160px']}
                background="transparent"
                border="0.125rem solid"
                textAlign="center"
                _focus={{
                    borderColor: 'black',
                }}
            >
                {allOptions.map(option => (
                    <Box as="option" key={option} value={option}>
                        {option}
                    </Box>
                ))}
            </Select>
        </Stack>
    );
}

Search.propTypes = {
    currentOption: PropTypes.string.isRequired,
    allOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelectOption: PropTypes.func.isRequired,
    onSearchInput: PropTypes.func.isRequired,
};

export default Search;
