/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { createLink } from '../../routes';

import { BookCarousel } from '../../components/Book';

export default function DesignationsCarousel({
    designationBooks,
    onDashboardCarouselBookClick,
}) {
    return (
        <div>
            {designationBooks.map(({ designation, designationID, books }) => {
                const buttonLink = createLink.toDesignation(designationID);
                return (
                    <BookCarousel
                        key={designation}
                        category={designation}
                        books={books.slice(0, 10)}
                        buttonLink={buttonLink}
                        onClick={onDashboardCarouselBookClick}
                    />
                );
            })}
        </div>
    );
}

DesignationsCarousel.propTypes = {
    designationBooks: PropTypes.array.isRequired,
    onDashboardCarouselBookClick: PropTypes.func.isRequired,
};
