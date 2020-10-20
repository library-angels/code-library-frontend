import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tag, TagLabel, TagCloseButton, Flex, Link } from '@chakra-ui/core';
import { useSearchSelector, useResetFilterDispatch } from '../../hooks/search';

export default function SearchTags({ filteredOptions }) {
    const [showAllTags, setShowAllTags] = useState(false);
    const { showTags, tagsItems } = useSearchSelector(showAllTags);
    const { resetAllFilterOptions } = useResetFilterDispatch();
    const showtags = showTags;
    const tagNumbers = tagsItems;

    return (
        <Flex w="90%" mb="1rem">
            {showtags.result && (
                <Flex flexWrap="wrap">
                    {tagNumbers.map(option => (
                        <Tag
                            size="sm"
                            key={option.category + option.value}
                            rounded="full"
                            variant="solid"
                            backgroundColor="#B3D3F980"
                            color="#06254C"
                            border="1px solid #06254C"
                            m={[
                                '0.15rem 0.3rem',
                                '0.3rem 0.6rem',
                                '0.5rem 1rem',
                            ]}
                        >
                            <TagLabel fontSize={13} paddingX={2}>
                                {option.category}: {option.value}
                            </TagLabel>
                            <TagCloseButton
                                onClick={() => {
                                    filteredOptions(
                                        option.value,
                                        option.category,
                                    );
                                }}
                            />
                        </Tag>
                    ))}
                    <Tag
                        as={Link}
                        size="sm"
                        rounded="full"
                        variant="solid"
                        backgroundColor="#B3D3F980"
                        color="#06254C"
                        border="1px solid #06254C"
                        m={['0.15rem 0.3rem', '0.3rem 0.6rem', '0.5rem 1rem']}
                        onClick={() => {
                            setShowAllTags(!showAllTags);
                        }}
                        tabIndex="0"
                    >
                        <TagLabel fontSize={13} paddingX={2}>
                            {showAllTags
                                ? 'show less filters'
                                : `+${showtags.tagsLength - 2}`}
                        </TagLabel>
                    </Tag>
                    <Flex
                        tabIndex="0"
                        as={Link}
                        alignItems="center"
                        textDecoration="underline"
                        onClick={() => {
                            resetAllFilterOptions();
                        }}
                    >
                        Clear filters
                    </Flex>
                </Flex>
            )}
        </Flex>
    );
}

SearchTags.propTypes = {
    filteredOptions: PropTypes.func.isRequired,
};
