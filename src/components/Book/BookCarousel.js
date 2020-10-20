/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Slider from 'react-slick';
import {
    Flex,
    Link,
    Heading,
    Image,
    Box,
    Skeleton,
    PseudoBox,
} from '@chakra-ui/core';
import testing_missing_cover from '../../static/testing_missing_cover.png';
import transparent from '../../static/transparent.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

function BookCarousel({ category, books, buttonLink, onClick }) {
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
    const [loading, setLoading] = useState(false);
    const [ImageFallBack, setImageFallBack] = useState(false);
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
                <Skeleton isLoaded={loading}>
                    <Heading as="h2" paddingLeft="1rem">
                        {category}
                    </Heading>
                </Skeleton>
                <Skeleton isLoaded={loading}>
                    <Link
                        as={RouterLink}
                        to={buttonLink}
                        _hover={{
                            color: 'white',
                            background: 'black',
                            borderColor: 'white',
                        }}
                        display="flex"
                        alignSelf="flex-end"
                        textDecoration="underline"
                    >
                        View all
                    </Link>
                </Skeleton>
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
                        <Skeleton isLoaded={loading}>
                            <PseudoBox
                                tabIndex="0"
                                _focus={{ outline: '4px solid #8ec2ed' }}
                            >
                                <Image
                                    id={id}
                                    src={`https://library.code.berlin/static/book_cover/${cover}.jpg`}
                                    alt={title}
                                    // border="1px solid rgb(90, 90, 90)"
                                    maxWidth="100px"
                                    maxHeight="150px"
                                    onClick={() => onClick(id)}
                                    onLoad={() => {
                                        setLoading(true);
                                    }}
                                    onError={() => {
                                        setLoading(true);
                                        setImageFallBack(true);
                                    }}
                                    fallbackSrc={
                                        ImageFallBack
                                            ? testing_missing_cover
                                            : transparent
                                    }
                                />
                            </PseudoBox>
                        </Skeleton>
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
            cover: PropTypes.number,
            title: PropTypes.string,
        }),
    ).isRequired,
    buttonLink: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default BookCarousel;
