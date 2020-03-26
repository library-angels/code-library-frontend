import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import Slider from 'react-slick';
import { Flex, Link, Heading, Image, Box } from '@chakra-ui/core';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

function BookCarousel({ category, books }) {
    const responsiveBreakpoints = [
        { breakpoint: 900, slides: 5 },
        { breakpoint: 800, slides: 4 },
        { breakpoint: 600, slides: 3 },
        { breakpoint: 480, slides: 2 },
    ].map(({ breakpoint, slides }) => ({
        breakpoint,
        settings: {
            slidesToShow: slides,
            slidesToScroll: slides,
            dots: true,
        },
    }));

    return (
        <Flex
            margin="0 auto"
            padding="2rem"
            width={['100%']}
            maxWidth="1024px"
            flexDirection="column"
            justifyContent="center"
        >
            <Flex
                justifyContent="space-between"
                border="2px solid black"
                borderRadius="0.25rem"
                margin="0 auto"
                width={['100%']}
            >
                <Heading as="h2" paddingLeft="1rem">
                    {category}
                </Heading>
                <Link
                    as={RouterLink}
                    to={`/category/${category}`}
                    _hover={{
                        textDecoration: 'none',
                    }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    paddingRight="1rem"
                >
                    Show All
                </Link>
            </Flex>
            {/* Slider */}
            <Slider
                dots
                className="variable-width"
                arrows
                infinite
                speed={500}
                slidesToShow={5}
                initialSlide={0}
                responsive={responsiveBreakpoints}
            >
                {/* Slider Child  */}
                {books.map(({ id, cover }) => (
                    <Box
                        key={id}
                        className="book-carousel-child"
                        marginTop="1rem"
                    >
                        <Image
                            src={`https://library.code.berlin${cover}`}
                            alt="book"
                            border="1px solid rgb(90, 90, 90)"
                            maxWidth="100px"
                            maxHeight="150px"
                        />
                    </Box>
                ))}
            </Slider>
        </Flex>
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
