import React, { useState } from 'react';
import {
    Stack,
    Select,
    Input,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

function NavigationSearch() {
    const [search, setSearch] = useState(null);
    const [select, setSelect] = useState('title');

    const options = [
        {
            value: 'title',
            text: 'Title',
        },
        {
            value: 'author',
            text: 'Author',
        },
        {
            value: 'tags',
            text: 'Text',
        },
    ];

    return (
        <Stack
            spacing={1}
            marginTop="90px"
            width="100%"
            display="flex"
            flexDirection={['column', 'column', 'column', 'row']}
            justifyContent={[
                'space-around',
                'space-around',
                'space-around',
                'center',
            ]}
            alignItems="center"
        >
            {/* Search Bar  */}
            <InputGroup
                width={['85%', '75%', '65%', '645px']}
                marginRight={['0', '0', '0', '1em']}
            >
                <InputLeftElement>
                    <FontAwesomeIcon icon={faSearch} />
                </InputLeftElement>
                <Input
                    placeholder="Which book are you looking for?"
                    onKeyUp={e => {
                        setSearch(e.target.value);
                        // eslint-disable-next-line no-console
                        console.log(`Searching for ${select} ${search}`);
                    }}
                    variant="filled"
                    borderRadius="0"
                    borderBottom="1px solid black"
                    background="transparent"
                    _focus={{
                        borderColor: 'black',
                        borderRadius: '0.25rem',
                    }}
                />
            </InputGroup>
            {/* Seach Options */}
            <Select
                value={select}
                onChange={({ target }) => setSelect(target.value)}
                placeholder="Select option"
                width={['85%', '75%', '65%', '150px']}
                marginTop={['1em', '1em', '1em', '0em']}
                background="transparent"
                _focus={{
                    borderColor: 'black',
                }}
            >
                {options.map(({ value, text }) => (
                    <option key={value} value={value}>
                        {text}
                    </option>
                ))}
            </Select>
        </Stack>
    );
}

export default NavigationSearch;
