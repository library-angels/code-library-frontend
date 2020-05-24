import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Flex, List, ListItem, Link, Icon } from '@chakra-ui/core';

import { createLink } from '../../routes';

const Pagination = ({ lastPageIndex, page, designationID }) => {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        let [start, end] = [0, 0];

        if (lastPageIndex) {
            if (lastPageIndex - 2 > page) {
                start = page - 2 > 1 ? page - 2 : 1;
                end = start + 4 < lastPageIndex ? start + 4 : lastPageIndex;
            } else {
                start = lastPageIndex - 4 > 1 ? lastPageIndex - 4 : 1;
                end = lastPageIndex;
            }
        } else {
            start = page - 2 > 1 ? page - 2 : 1;
            end = page + 2 > 5 ? page + 2 : 5;
        }

        const pagesArray = [];
        for (let i = start; i <= end; i += 1) {
            pagesArray.push(i);
        }

        setPages(pagesArray);
    }, [page, lastPageIndex]);

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
                        page: page > 1 ? page - 1 : page,
                    })}
                >
                    <Icon name="chevron-left" size="30px" />
                </Link>
                {pages.map(number => (
                    <ListItem
                        padding="0.5em 0.5em"
                        margin="0.5em"
                        borderBottom="2px solid black"
                        borderColor={number === page ? 'black' : 'transparent'}
                        key={number}
                    >
                        <Link
                            as={RouterLink}
                            to={createLink.toDesignationPage({
                                designationID,
                                page: number,
                            })}
                        >
                            {number}
                        </Link>
                    </ListItem>
                ))}
                <Link
                    as={RouterLink}
                    to={createLink.toDesignationPage({
                        designationID,
                        page: lastPageIndex
                            ? page < lastPageIndex
                                ? page + 1
                                : page
                            : page + 1,
                    })}
                >
                    <Icon name="chevron-right" size="30px" />
                </Link>
            </Flex>
        </List>
    );
};

export default Pagination;
