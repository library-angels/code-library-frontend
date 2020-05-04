import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import Slider from 'react-slick';
import { Flex, Link, Heading, Image, Box } from '@chakra-ui/core';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

function BookCarousel({ category, books, buttonLink }) {
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
                margin="0 auto"
                width={['100%']}
            >
                <Heading as="h2" paddingLeft="1rem">
                    {category}
                </Heading>
                <Link
                    as={RouterLink}
                    to={buttonLink}
                    _hover={{
                        textDecoration: 'none',
                        color: 'white',
                        background: 'black',
                    }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    paddingX="1rem"
                    border="2px solid black"
                    borderRadius=".250rem"
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
                {books.map(({ id, cover, title }) => (
                    <Box
                        key={id}
                        className="book-carousel-child"
                        marginTop="1rem"
                    >
                        <Image
                            src={`https://library.code.berlin${cover}`}
                            alt={title}
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
    category: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            cover: PropTypes.string,
            title1: PropTypes.string,
        }),
    ).isRequired,
    buttonLink: PropTypes.string.isRequired,
};

export default BookCarousel;
