import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

function BookCarousel({ category, books }) {
    return (
        <div className="book-carousel">
            <div className="book-carousel-category">
                <h2>{category}</h2>
                <Link to={`/category/${category}`}>Show All</Link>
            </div>
            <Slider
                dots
                className="variable-width"
                arrows
                infinite
                speed={500}
                slidesToShow={5}
                initialSlide={0}
                responsive={[
                    {
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5,
                            dots: true,
                        },
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            dots: true,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 3,
                            initialSlide: 3,
                            dots: true,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: true,
                        },
                    },
                ]}
            >
                {books.map(({ id, cover }) => (
                    <div key={id} className="book-carousel-child">
                        <img
                            src={`https://library.code.berlin${cover}`}
                            alt="book"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

BookCarousel.propTypes = {
    category: PropTypes.string,
    books: PropTypes.arrayOf({
        id: PropTypes.number,
        cover: PropTypes.string,
    }),
};

BookCarousel.defaultProps = {
    category: '',
    books: [
        {
            id: 0,
            cover: '',
        },
    ],
};

export default BookCarousel;
