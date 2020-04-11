import React from 'react';
import PropTypes from 'prop-types';

import { Flex, Link, Image } from '@chakra-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import logo from '../../static/code.png';

import Routes from '../../routes';

const NavigationLink = ({ to, text, justifyContent }) => (
    <Flex
        height="100%"
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent={justifyContent}
        textAlign="center"
        color="black"
    >
        <Link
            as={RouterLink}
            to={to}
            _hover={{
                textDecoration: 'none',
            }}
        >
            {text}
        </Link>
    </Flex>
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
            justifyContent: ['center', 'center'],
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
            background="white"
        >
            {/* Logo Link Container */}
            <Flex
                justify="flex-start"
                align="center"
                height="100%"
                width={['50%', '50%', '75%']}
            >
                <Link as={RouterLink} to={Routes.Dashboard} marginLeft="1em">
                    <Image
                        src={logo}
                        alt="logo"
                        height={['25px', '35px', '50px']}
                    />
                </Link>
            </Flex>
            {/* Navigation Links Container */}
            <Flex
                as="nav"
                height="100%"
                align="center"
                justify="center"
                width={['50%', '50%', '25%']}
            >
                {links.map(({ to, text, justifyContent }) => (
                    <NavigationLink
                        key={text}
                        to={to}
                        text={text}
                        justifyContent={justifyContent}
                    />
                ))}
            </Flex>
        </Flex>
    );
}
