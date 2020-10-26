import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/core';
import { ReactComponent as arrow } from '../../static/arrowRight.svg';

export default function TapMainCategories({
    searchDetails,
    setTabIndex,
    setDisplayTap,
    submitedFilterOption,
}) {
    return (
        <Flex flexDirection="column">
            {searchDetails.map((option, index) => (
                <Flex
                    key={`FilterStac${option}`}
                    flexDirection="column"
                    m="0px 10px"
                    pb="5px"
                    pt="5px"
                    minH="34px"
                    borderBottom={
                        index + 1 < searchDetails.length
                            ? '1px solid #6f6f6f'
                            : null
                    }
                >
                    <Flex
                        flexDirection="column"
                        onClick={() => {
                            setTabIndex(1);
                            setDisplayTap(option);
                        }}
                    >
                        <Flex
                            as="a"
                            color="#595959"
                            fontSize="13px"
                            lineHeight="17px"
                            key={`FilterStack_Flex${option}`}
                        >
                            {option}
                        </Flex>
                        <Flex flexDirection="row">
                            <Flex
                                key={`FilterStack_Flex2${option}`}
                                justifyContent="space-between"
                                w="90%"
                            >
                                {submitedFilterOption[option].join(' ,')}
                            </Flex>
                            <Flex
                                as={arrow}
                                size="22px"
                                position="relative"
                                left="7px"
                            />
                        </Flex>
                    </Flex>
                </Flex>
            ))}
        </Flex>
    );
}
TapMainCategories.propTypes = {
    searchDetails: PropTypes.arrayOf(PropTypes.string).isRequired,
    setTabIndex: PropTypes.func.isRequired,
    setDisplayTap: PropTypes.func.isRequired,
    submitedFilterOption: PropTypes.shape({
        'Search by': PropTypes.arrayOf(PropTypes.string),
        Category: PropTypes.arrayOf(PropTypes.string),
        Series: PropTypes.arrayOf(PropTypes.string),
        Publishers: PropTypes.arrayOf(PropTypes.string),
        'Sort by': PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};
