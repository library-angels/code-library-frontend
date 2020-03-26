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
                width={['100%', '110px']}
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
