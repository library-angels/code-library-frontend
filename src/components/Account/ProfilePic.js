import React from 'react';
import PropTypes from 'prop-types';

import { Image, Heading, Flex } from '@chakra-ui/core';

function ProfilePic({ src, alt, text }) {
    return (
        <Flex flexDirection="column">
            <Heading as="h1" size="lg" p={[2, 4]}>
                {text}
            </Heading>
            <Flex p={[2, 4]} flexDirection="row">
                <Image
                    width={[1 / 4, 1 / 2, '60%']}
                    maxW={['130px', '250px']}
                    rounded="full"
                    src={src}
                    alt={alt}
                    referrerPolicy="no-referrer"
                />
                <Flex fontWeight="bold" alignItems="center" ml="1rem">
                    {alt}
                </Flex>
            </Flex>
        </Flex>
    );
}

ProfilePic.propTypes = {
    text: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default ProfilePic;
