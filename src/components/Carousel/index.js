import React, { useState } from 'react';

import { Box, Flex, Image, Collapse, Button } from '@chakra-ui/core';
import RequestExtention from '../RequestExtention';

import useToggle from '../../hooks/toggle';
import useBookDetails from '../../hooks/bookDetails';

function Carousel(props) {
    const { bookDetails } = useBookDetails();
    const { modal } = useToggle();
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);
    const URL = 'https://library.code.berlin/';

    const handleRequestExt = id => {
        bookDetails.bookView(id);
        modal.toggleView();
    };

    return (
        <>
            <Box fontWeight="bold" m={4}>
                {props.title}
            </Box>
            <Collapse startingHeight={152} isOpen={show} m={2}>
                <Flex maxW="760" m={2} flexWrap="wrap">
                    {props.book.map(book => {
                        return (
                            <Flex key={book.id} m={2} width="20%" pb={[6, 2]}>
                                <Image
                                    onClick={() => {
                                        handleRequestExt(book.id);
                                    }}
                                    maxW="100%"
                                    maxH="120px"
                                    src={URL + book.cover}
                                    boxShadow="     0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                                                    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                                                    0 12.5px 10px rgba(0, 0, 0, 0.06)                                                
                                                   "
                                />
                            </Flex>
                        );
                    })}
                </Flex>
            </Collapse>
            {props.book.length < 5 ? null : (
                <Flex flexDirection="row-reverse" ml={2}>
                    <Flex pl={['15px', '15px', '0px']} width={'32%'}>
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

export default Carousel;
