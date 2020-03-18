import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/core';
import data from '../../LibTestApi/LibTestApiJson.json';

function Carousel(props) {
    const NewData = data.slice(0, 4);

    const URL = 'https://library.code.berlin/';

    return (
        <div>
            <Box>{props.title}</Box>
            <Flex height={'30vw'}>
                {NewData.map(book => {
                    return (
                        <Flex key={book.id} m={[2]} width={'25%'}>
                            <Flex width={'100%'}>
                                <Image size="100% " src={URL + book.cover} />
                            </Flex>
                        </Flex>
                    );
                })}
            </Flex>
        </div>
    );
}

export default Carousel;
