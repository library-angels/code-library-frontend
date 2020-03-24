/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/core';
import useToggle from '../../hooks/toggle';

function RequestExtention(props) {
    const { book } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { modal } = useToggle();
    console.log(book);

    useEffect(() => {
        onOpen();
        return () => {
            modal.toggleView();
        };
    }, [modal, onOpen]);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} aria-hidden="false">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{book.title1}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{book.title2}</ModalBody>

                    <ModalFooter>
                        <Button
                            variantColor="blue"
                            mr={3}
                            onClick={() => {
                                onClose();
                            }}
                        >
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

// RequestExtention.propTypes = { book: PropTypes.string };
export default RequestExtention;
