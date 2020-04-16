import React from 'react';
import PropTypes from 'prop-types';

import { Image, Box, Heading } from '@chakra-ui/core';

function ProfilePic({ text, src, alt }) {
    return (
        <Box>
            <Heading as="h1" size="lg">
                {text}
            </Heading>
            <Box size="sm" p={[2, 4]} height="25%">
                <Image
                    width={[1 / 4, 1 / 2, '60%']}
                    boxShadow={`
                        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                        0 12.5px 10px rgba(0, 0, 0, 0.06),
                        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                        0 100px 80px rgba(0, 0, 0, 0.12)`}
                    rounded="full"
                    src={src}
                    alt={alt}
                />
            </Box>
        </Box>
    );
}

ProfilePic.propTypes = {
    text: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
};

ProfilePic.defaultProps = {
    text: 'My profile',
    src: 'https://bit.ly/sage-adebayo',
    alt: 'Segun Adebayo',
};

export default ProfilePic;
