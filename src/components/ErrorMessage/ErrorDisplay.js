import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Modal,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    ModalContent,
    useDisclosure,
} from '@chakra-ui/core';
import { useErrorSelector, useErrorDispatch } from '../../hooks/errors';

const CustomErrorMessage = ({ errorMessage, onClose, resetErrorMessage }) => {
    switch (errorMessage) {
        case '': {
            return <div />;
        }
        case 'popup_closed_by_user': {
            return (
                <Modal onClose={onClose} isOpen>
                    <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton
                            onClick={() => {
                                resetErrorMessage();
                            }}
                        />
                        <ModalBody>
                            Sit nulla est ex deserunt exercitation anim
                            occaecat. Nostrud ullamco deserunt aute id consequat
                            veniam incididunt duis in sint irure nisi. Mollit
                            officia cillum Lorem ullamco minim nostrud elit
                            officia tempor esse quis.
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                onClick={() => {
                                    onClose();
                                    resetErrorMessage();
                                }}
                            >
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            );
        }
        default:
            return null;
    }
};

CustomErrorMessage.propTypes = {
    errorMessage: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    resetErrorMessage: PropTypes.func.isRequired,
};

export default function ErrorDisplay() {
    const { resetErrorMessage } = useErrorDispatch();
    const { errorMessage } = useErrorSelector();
    const { onOpen, onClose } = useDisclosure();
    useEffect(() => {
        onOpen();
    }, [onOpen]);

    return (
        <CustomErrorMessage
            errorMessage={errorMessage}
            onClose={onClose}
            resetErrorMessage={resetErrorMessage}
        />
    );
}
