import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Flex, List, ListItem, Link, Icon } from '@chakra-ui/core';

import { createLink } from '../../routes';

const Pagination = ({ designationID, postsPerPage, totalPosts = 300 }) => {
    const initial = current => {
        if (current <= 3) {
            return { current, pages: [1, 2, 3, 4, 5] };
        }

        const pages = [];
        for (let i = current - 2; i <= current + 2; i += 1) {
            pages.push(i);
        }

        return { current, pages };
    };

    const [pageNumbers, setPageNumbers] = useState(initial(1));

    const onPageClick = number => setPageNumbers(initial(number));

    const { current, pages } = pageNumbers;

    return (
        <List
            paddingBottom="2em"
            as="ul"
            className="pagination"
            margin="0 auto"
        >
            <Flex direction="row" justifyContent="center" alignItems="center">
                <Link
                    as={RouterLink}
                    to={createLink.toDesignationPage({
                        designationID,
                        page: current - 1,
                    })}
                    onClick={() => {
                        if (current > 1) {
                            onPageClick(current - 1);
                        }
                    }}
                >
                    <Icon name="chevron-left" size="30px" />
                </Link>
                {pages.map(number => (
                    <ListItem
                        padding="0.5em 0.5em"
                        margin="0.5em"
                        borderBottom="2px solid black"
                        borderColor={
                            number === current ? 'black' : 'transparent'
                        }
                        key={number}
                    >
                        <Link
                            as={RouterLink}
                            to={createLink.toDesignationPage({
                                designationID,
                                page: number,
                            })}
                            onClick={() => onPageClick(number)}
                        >
                            {number}
                        </Link>
                    </ListItem>
                ))}
                <Link
                    as={RouterLink}
                    to={createLink.toDesignationPage({
                        designationID,
                        page: current + 1,
                    })}
                    onClick={() => onPageClick(current + 1)}
                >
                    <Icon name="chevron-right" size="30px" />
                </Link>
            </Flex>
        </List>
    );
};

export default Pagination;
