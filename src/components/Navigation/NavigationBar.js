import React from 'react';
import PropTypes from 'prop-types';

import { Flex, Link, Image } from '@chakra-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import logo from '../../static/code.png';

import Routes from '../../router';

export const NavigationLink = ({ to, text, justifyContent }) => (
    <Link
        as={RouterLink}
        to={to}
        height="100%"
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent={justifyContent}
        paddingLeft="1em"
        paddingRight="1em"
        textAlign="center"
        color="black"
        _hover={{
            textDecoration: 'none',
        }}
    >
        {text}
    </Link>
);

NavigationLink.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    justifyContent: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function NavigationBar() {
    const links = [
        {
            to: Routes.Account,
            text: 'My Account',
            justifyContent: ['center', 'flex-end'],
        },
        {
            to: Routes.Logout,
            text: 'Log out',
            justifyContent: ['center', 'flex-start'],
        },
    ];

    return (
        <Flex
            as="header"
            borderBottom="3px solid black"
            position="fixed"
            top="0"
            height="80px"
            width="100%"
            align="center"
            zIndex="3"
        >
            {/* Logo Link Container */}
            <Link
                as={RouterLink}
                to={Routes.Dashboard}
                height="100%"
                width={['50%', '50%', '75%']}
            >
                <Flex
                    height="100%"
                    display="flex"
                    justify="flex-start"
                    align="center"
                >
                    <Image
                        marginLeft="1em"
                        src={logo}
                        alt="logo"
                        height={['25px', '35px', '50px']}
                    />
                </Flex>
            </Link>
            {/* Navigation Links Container */}
            <Flex as="nav" height="100%" align="center" justify="center">
                {links.map(({ to, text, justifyContent }) => (
                    <NavigationLink
                        to={to}
                        text={text}
                        justifyContent={justifyContent}
                    />
                ))}
            </Flex>
        </Flex>
    );
}
