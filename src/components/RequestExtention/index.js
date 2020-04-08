import React, { useEffect } from 'react';

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
import useToggle from '../../hooks/toggle';
import data from '../../LibTestApi/LibTestApiJson.json';

function RequestExtention(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { modal } = useToggle();
    const URL = 'https://library.code.berlin/';
    const book = data.filter(book => book.id === props.id);
    const [value, setValue] = React.useState(0);
    const handleChange = e => setValue(e.target.value);

    function OptionList() {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        const OptionItems = numbers.map(number => (
            <option key={number} value={number.toString()}>
                {number}
            </option>
        ));
        return (
            <Select w="20%" m="5px" onChange={handleChange}>
                {OptionItems}
            </Select>
        );
    }

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
                    <ModalCloseButton onClick={() => modal.toggleView()} />
                    <ModalBody mt="20px">
                        <Flex>
                            <Image
                                alignSelf="center"
                                src={URL + book[0].cover}
                                maxW="100%"
                                maxH="120px"
                                boxShadow=" 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                                            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                                            0 12.5px 10px rgba(0, 0, 0, 0.06)                                                
                                            "
                            />
                            <Flex
                                width="100%"
                                flexDirection="column"
                                justifyItems="center"
                                alignItems="center"
                            >
                                <Text textAlign="center">{book[0].title1}</Text>
                                <Text textAlign="center">
                                    by {book[0].author}
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex Flex flexDirection="column">
                            <Text m="10px 0px 0px 0px">About the book</Text>

                            <Text m="0px">{book[0].title2}</Text>
                        </Flex>
                    </ModalBody>
                    <ModalFooter flexDirection="column">
                        <Flex flexDirection="row" alignItems="baseline">
                            <Text>Request extention time of</Text>
                            {OptionList()}
                            <Text>day{value !== '1' ? 's' : null}</Text>
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
                                modal.toggleView();
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

export default RequestExtention;
