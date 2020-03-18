import React from 'react';

import { Image } from '@chakra-ui/core';
import { Box } from '@chakra-ui/core';

function ProfilePic() {
    return (
        <div>
            <h3>My Profile</h3>
            <Box size="sm" p={[2, 4]} height={'25%'}>
                <Image
                    width={[1 / 4, 1 / 2, '60%']}
                    rounded="full"
                    src="https://bit.ly/sage-adebayo"
                    alt="Segun Adebayo"
                />
            </Box>
        </div>
    );
}

export default ProfilePic;
