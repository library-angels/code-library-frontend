import React from 'react';
import PropTypes from 'prop-types';
import { Flex, IconButton } from '@chakra-ui/core';
import { ReactComponent as SquaredMenu } from '../../static/squared_menu.svg';
import { ReactComponent as ListMenu } from '../../static/list_menu.svg';

function BookLayOut({ setLayout, searchLayout, layout }) {
    function MenuSquarIcon() {
        return (
            <SquaredMenu
                fill={
                    layout.mr === searchLayout.gridLayout.mr
                        ? '#0D54AB'
                        : 'black'
                }
            />
        );
    }

    function MenuListIcon() {
        return (
            <ListMenu
                fill={
                    layout.mr === searchLayout.listLayout.mr
                        ? '#0D54AB'
                        : 'black'
                }
            />
        );
    }
    return (
        <Flex
            height="22px"
            justifyContent="flex-end"
            mt="-10px"
            mb="10px"
            mr={['1rem', '1rem', '0rem']}
        >
            <IconButton
                icon={MenuSquarIcon}
                size={22}
                mr={1}
                onClick={() => {
                    setLayout(searchLayout.gridLayout);
                }}
            />
            <IconButton
                icon={MenuListIcon}
                size={22}
                onClick={() => {
                    setLayout(searchLayout.listLayout);
                }}
            />
        </Flex>
    );
}

export default BookLayOut;

BookLayOut.propTypes = {
    setLayout: PropTypes.func.isRequired,
    searchLayout: PropTypes.shape({
        gridLayout: PropTypes.shape({
            width: PropTypes.arrayOf(PropTypes.string),
            flexDirection: PropTypes.string,
            mr: PropTypes.string,
        }),
        listLayout: PropTypes.objectOf(PropTypes.string),
    }).isRequired,
    layout: PropTypes.shape({
        width: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string),
        ]),
        flexDirection: PropTypes.string,
        mr: PropTypes.string,
    }).isRequired,
};
