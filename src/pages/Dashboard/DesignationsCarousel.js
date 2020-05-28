/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { createLink } from '../../routes';

import { BookCarousel } from '../../components/Book';

export default function DesignationsCarousel({ designationBooks }) {
    return (
        <div>
            {designationBooks.map(({ designation, designationID, books }) => {
                const buttonLink = createLink.toDesignation(designationID);

                return (
                    <BookCarousel
                        key={designation}
                        category={designation}
                        books={books}
                        buttonLink={buttonLink}
                    />
                );
            })}
        </div>
    );
}

DesignationsCarousel.propTypes = {
    designationBooks: PropTypes.array.isRequired,
};
