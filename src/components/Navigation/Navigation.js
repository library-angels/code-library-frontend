import React from 'react';
import PropTypes from 'prop-types';

import NavigationBar from './NavigationBar';
import NavigationSearch from './NavigationSearch';

export default function Navigation({ includeSearch }) {
    return (
        <>
            <NavigationBar />
            {includeSearch && <NavigationSearch />}
        </>
    );
}

Navigation.propTypes = {
    includeSearch: PropTypes.bool,
};

Navigation.defaultProps = {
    includeSearch: false,
};
