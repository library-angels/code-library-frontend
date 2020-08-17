import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { TabList, Tab, Box } from '@chakra-ui/core';
import { ReactComponent as arrowLeft } from '../../static/arrowLeft.svg';

export default function TabOption({
    setTabIndex,
    displayTap,
    setDisplayTap,
    setShowArrow,
    filterModalBackground,
}) {
    useEffect(() => {
        setShowArrow(true);
        filterModalBackground(true);
        return () => {
            setShowArrow(false);
            filterModalBackground(false);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <TabList
            display="flex"
            justifyContent={displayTap === '' ? 'center' : 'flex-start'}
            alignItems="center"
            borderBottom="1px solid #6f6f6f"
        >
            <Tab
                mr="1rem"
                onClick={() => {
                    setTabIndex(0);
                    setDisplayTap('');
                }}
                pl={displayTap ? '0.2rem!important' : null}
            >
                {displayTap && <Box as={arrowLeft} size="14px" />}
                Filter
            </Tab>
            {displayTap && (
                <Tab color="#595959" fontSize="13px" lineHeight="17px">
                    {displayTap}
                </Tab>
            )}
        </TabList>
    );
}
TabOption.propTypes = {
    setTabIndex: PropTypes.func.isRequired,
    setDisplayTap: PropTypes.func.isRequired,
    setShowArrow: PropTypes.func.isRequired,
    filterModalBackground: PropTypes.func.isRequired,
    displayTap: PropTypes.string.isRequired,
};
