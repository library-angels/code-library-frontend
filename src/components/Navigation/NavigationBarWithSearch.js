import React from 'react';

import NavigationBar from './NavigationBar';
import Search from './Search';

import useSearch from '../../hooks/search';

export default function NavigationWithSearch() {
    const { get, set } = useSearch();

    return (
        <>
            <NavigationBar />
            <Search
                currentOption={get.field}
                allOptions={get.fields}
                onSelectOption={set.setField}
                onSearchInput={set.setInput}
            />
        </>
    );
}
