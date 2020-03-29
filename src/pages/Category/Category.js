import React from 'react';
import { useParams } from 'react-router-dom';

import { Flex, Spinner } from '@chakra-ui/core';

import { BookCategory } from '../../components/Book';
import useBooks from '../../hooks/books';

export default function Category() {
    const { department } = useParams();
    const {
        get: { category },
    } = useBooks(department);

    return (
        <Flex direction="column" alignItems="center">
            <Flex justifyContent="center" wrap="wrap" maxWidth="1024px">
                {category.length <= 0 ? (
                    <Spinner marginTop="3rem" />
                ) : (
                    category.map(({ author, title1: title, cover }) => (
                        <BookCategory
                            author={author}
                            title={title}
                            cover={cover}
                        />
                    ))
                )}
            </Flex>
        </Flex>
    );
}
