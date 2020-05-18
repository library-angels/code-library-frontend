/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Flex, Image, Collapse, Button } from '@chakra-ui/core';

function ProfileCarouselBook({ id, title, src, onClick }) {
    return (
        <Flex key={id} m={2} width="20%" pb={[6, 2]}>
            <Image
                onClick={() => onClick(id)}
                alt={title}
                maxW="100%"
                maxH="120px"
                src={src}
                boxShadow={`
            0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06)`}
            />
        </Flex>
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

    return (
        <>
            <Box fontWeight="bold" m={4}>
                {title}
            </Box>
            <Collapse startingHeight={152} isOpen={show} m={2}>
                <Flex maxW="760" m={2} flexWrap="wrap">
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
        </>
    );
}

ProfileCarousel.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            cover: PropTypes.string,
        }),
    ).isRequired,
    onProfileCarouselBookClick: PropTypes.func.isRequired,
};

export default ProfileCarousel;
