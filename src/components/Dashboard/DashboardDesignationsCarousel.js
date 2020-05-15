/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { createLink } from '../../routes';

import { BookCarousel } from '../Book';

export default function DashboardDesignationsCarousel({
    designations,
    designationIDs,
    designationBooks,
}) {
    return (
        <div>
            {designationIDs.map(designationID => {
                const designationName = designations[designationID];
                const currentDesignationBookIDs = Object.keys(
                    designationBooks[designationID] || {},
                );

                const books = currentDesignationBookIDs.map(
                    bookID => designationBooks[designationID][bookID],
                );

                const buttonLink = createLink.toDesignation(designationID);

                return (
                    <BookCarousel
                        key={designationID}
                        category={designationName}
                        books={books}
                        buttonLink={buttonLink}
                    />
                );
            })}
        </div>
    );
}

DashboardDesignationsCarousel.propTypes = {
    designations: PropTypes.object.isRequired,
    designationIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
    designationBooks: PropTypes.object.isRequired,
};
