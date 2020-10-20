/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Flex,
    Image,
    Collapse,
    Button,
    Skeleton,
    PseudoBox,
} from '@chakra-ui/core';
import testing_missing_cover from '../../static/testing_missing_cover.png';
import transparent from '../../static/transparent.png';

function ProfileCarouselBook({ id, title, src, onClick }) {
    const [loading, setLoading] = useState(false);
    const [ImageFallBack, setImageFallBack] = useState(false);
    return (
        <Skeleton isLoaded={loading}>
            <PseudoBox
                display="flex"
                width={['120px', '180px']}
                tabIndex="0"
                _focus={{ outline: '4px solid #8ec2ed' }}
                m="12px"
            >
                <Image
                    alt={title}
                    id={id}
                    w="100%"
                    maxHeight="220px"
                    onLoad={() => {
                        setLoading(true);
                    }}
                    onError={() => {
                        setLoading(true);
                        setImageFallBack(true);
                    }}
                    src={src}
                    fallbackSrc={
                        ImageFallBack ? testing_missing_cover : transparent
                    }
                    onClick={() => onClick(id)}
                />
            </PseudoBox>
        </Skeleton>
    );
}

ProfileCarouselBook.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

function ProfileCarousel({ title, books, onProfileCarouselBookClick }) {
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);
    const [collapseHeight, setCollapseHeigth] = useState(window.innerWidth);

    useEffect(() => {
        function collapseChange() {
            setCollapseHeigth(window.innerWidth);
        }
        window.addEventListener('resize', collapseChange);
        return () => {
            window.removeEventListener('resize', collapseChange);
        };
    }, []);

    return (
        <>
            <Box fontWeight="bold" m={4}>
                {title}
            </Box>
            {books.length >= 5 && (
                <Flex flexDirection="row-reverse" ml={2}>
                    <Flex pl={['15px', '15px', '0px']} width="32%">
                        <Button
                            size="xs"
                            maxW="100px"
                            variant="solid"
                            onClick={handleToggle}
                        >
                            Show {show ? 'Less' : 'More'}
                        </Button>
                    </Flex>
                </Flex>
            )}
            <Collapse
                startingHeight={collapseHeight < 500 ? 220 : 250}
                isOpen={show}
                m={2}
            >
                <Flex maxW="820px" m={2} flexWrap="wrap">
                    {books.map(({ id, cover, title: bookTitle }) => (
                        <ProfileCarouselBook
                            key={id}
                            id={id}
                            src={`https://library.code.berlin/static/book_cover/${cover}.jpg`}
                            title={bookTitle}
                            onClick={onProfileCarouselBookClick}
                        />
                    ))}
                </Flex>
            </Collapse>
        </>
    );
}

ProfileCarousel.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            cover: PropTypes.number,
        }),
    ).isRequired,
    onProfileCarouselBookClick: PropTypes.func.isRequired,
};

export default ProfileCarousel;
