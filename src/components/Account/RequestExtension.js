/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
    Select,
    Text,
    Flex,
    Image,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/core';

function OptionList({ totalNumberOfDays, onChange }) {
    const numberOfDays = [];
    for (let i = 1; i <= totalNumberOfDays; i += 1) {
        numberOfDays.push(i);
    }

    return (
        <Select w="20%" m="5px" onChange={onChange}>
            {numberOfDays.map(number => (
                <option key={number} value={number}>
                    {number}
                </option>
            ))}
        </Select>
    );
}

OptionList.propTypes = {
    totalNumberOfDays: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

function RequestExtention({ book, onModalClose }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [requestedDays, setRequestedDays] = useState(0);
    const onOptionSelect = e => setRequestedDays(e.target.value);

    useEffect(() => {
        onOpen();
    }, [onOpen]);

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                blockScrollOnMount={false}
                closeOnOverlayClick={false}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton onClick={onModalClose} />
                    <ModalBody mt="20px">
                        <Flex>
                            <Image
                                alignSelf="center"
                                src={`https://library.code.berlin/static/book_cover/${book.cover}.jpg`}
                                alt="alternative"
                                maxW="100%"
                                maxH="120px"
                                boxShadow={`
                                    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                                    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                                    0 12.5px 10px rgba(0, 0, 0, 0.06)`}
                            />
                            <Flex
                                width="100%"
                                flexDirection="column"
                                justifyItems="center"
                                alignItems="center"
                            >
                                <Text textAlign="center">{book.title}</Text>
                                <Text textAlign="center">by {book.author}</Text>
                            </Flex>
                        </Flex>
                        <Flex Flex flexDirection="column">
                            <Text m="10px 0px 0px 0px">About the book</Text>
                            <Text m="0px">{book.title}</Text>
                        </Flex>
                    </ModalBody>
                    <ModalFooter flexDirection="column">
                        <Flex flexDirection="row" alignItems="baseline">
                            <Text>Request extention time of</Text>
                            <OptionList
                                totalNumberOfDays={14}
                                onChange={onOptionSelect}
                            />
                            <Text>{`day${requestedDays > 1 ? 's' : ''}`}</Text>
                        </Flex>
                        <Button variantColor="blue" mr={3}>
                            Request
                        </Button>
                        <Button
                            variantColor="blue"
                            mr={3}
                            mt={3}
                            onClick={() => {
                                onClose();
                                onModalClose();
                            }}
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

RequestExtention.propTypes = {
    book: PropTypes.shape({
        cover: PropTypes.number,
        title: PropTypes.string,
        author: PropTypes.string,
    }).isRequired,
    onModalClose: PropTypes.func.isRequired,
};

export default RequestExtention;
