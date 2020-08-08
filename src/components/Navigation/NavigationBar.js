/* eslint-disable no-shadow */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Flex, Link, Image } from '@chakra-ui/core';
import logo from '../../static/Codelibrarylogowhite.png';
import Routes from '../../routes';

const NavigationLink = ({ to, text, src, justifyContent, width }) => (
    <Flex
        height="100%"
        width={width}
        display="flex"
        alignItems="center"
        justifyContent={justifyContent}
        textAlign="center"
        color="white"
        fontSize={['10px', '16px']}
        mr="1em"
    >
        <Link
            display="flex"
            justifyContent="flex-end"
            as={RouterLink}
            to={to}
            _hover={{
                textDecoration: 'none',
            }}
            ml={['10px', '10px', '15px']}
        >
            {src ? (
                <Image
                    src={src}
                    referrerPolicy="no-referrer"
                    rounded="full"
                    width={['22px', '40px']}
                />
            ) : (
                text
            )}
        </Link>
    </Flex>
);

NavigationLink.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    justifyContent: PropTypes.arrayOf(PropTypes.string).isRequired,
    src: PropTypes.string.isRequired,
    width: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function NavigationBar({ src }) {
    const links = [
        {
            to: Routes.Account,
            text: 'My Account',
            width: ['65%', '65%', '70%', '80%'],
            src,
            justifyContent: ['flex-end'],
        },
        {
            to: Routes.Logout,
            text: 'Log Out',
            width: ['35%', '35%', '30%', '20%'],
            src: '',
            justifyContent: ['center'],
        },
    ];

    return (
        <Flex
            as="header"
            position="fixed"
            top="0"
            height={['40px', '60px']}
            width="100%"
            align="center"
            zIndex="3"
            background="black"
        >
            {/* Logo Link Container */}
            <Flex justify="flex-start" align="center" height="100%" width="50%">
                <Link as={RouterLink} to={Routes.Dashboard} marginLeft="1em">
                    <Image src={logo} alt="logo" width={['82px', '120px']} />
                </Link>
            </Flex>
            {/* Navigation Links Container */}
            <Flex
                as="nav"
                height="100%"
                align="center"
                justify="center"
                width="50%"
            >
                {links.map(({ to, text, src, justifyContent, width }) => (
                    <NavigationLink
                        key={text}
                        to={to}
                        text={text}
                        justifyContent={justifyContent}
                        src={src}
                        width={width}
                    />
                ))}
            </Flex>
        </Flex>
    );
}

NavigationBar.propTypes = {
    src: PropTypes.string.isRequired,
};
