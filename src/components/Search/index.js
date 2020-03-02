import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

function Search() {
    const [search, setSearch] = useState(null);
    const [select, setSelect] = useState(null);

    return (
        <div id="search">
            <button type="submit" className="searchButton">
                <FontAwesomeIcon icon={faSearch} />
            </button>
            <input
                type="text"
                className="searchTerm"
                placeholder="Which book are you looking for?"
                onKeyUp={e => {
                    setSearch(e.target.value);
                    console.log(`Searching for ${select} ${search}`);
                }}
                on
            />
            <select
                id="options"
                value={select}
                onChange={e => {
                    setSelect(e.target.value);
                }}
            >
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="tags">Tags</option>
            </select>
        </div>
    );
}

export default Search;
