import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import {
    Input,
    Stack,
    MenuItem,
    MenuGroup,
    Button,
    Flex,
} from '@chakra-ui/core';
import { ReactComponent as checkmark } from '../../static/checkmark.svg';

export default function TabPanelOptions({
    displayTap,
    searchDetails,
    filterPublisherInput,
    selectedFilterOptions,
    filteredOptions,
    publisherInputTerm,
    setTabIndex,
    setDisplayTap,
    submitSelectedOption,
    toggleObjects,
}) {
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        toggleObjects();
        // eslint-disable-next-line
    }, []);

    return (
        <Stack>
            {displayTap === 'Publishers' ? (
                <Flex p="10px 10px 0px">
                    <Input
                        placeholder="Type here publisher"
                        value={publisherInputTerm}
                        onChange={e => {
                            filterPublisherInput(e);
                        }}
                        onKeyDown={e => {
                            e.stopPropagation();
                        }}
                        border="1px solid #818181 !Important"
                        borderRadius="0px"
                        h="25px"
                    />
                </Flex>
            ) : null}
            <Stack display="flex" overflowY="auto" maxH="350px">
                <MenuGroup>
                    {searchDetails.length !== 0
                        ? searchDetails.map((value, index) => (
                              <Flex
                                  key={`TabPanelOptionsMenu${value}`}
                                  flexDirection="row"
                                  m="0px 10px"
                                  borderBottom={
                                      index + 1 < searchDetails.length
                                          ? '1px solid #818181'
                                          : null
                                  }
                              >
                                  <MenuItem
                                      w="90%"
                                      pl="0px"
                                      pr="1rem"
                                      value={value}
                                      onClick={() => {
                                          filteredOptions(value, displayTap);
                                      }}
                                      justifyContent="space-between"
                                  >
                                      {value}
                                  </MenuItem>
                                  {selectedFilterOptions[displayTap].filter(
                                      item => item === value,
                                  ).length !== 0 ? (
                                      <Flex alignItems="center" ml="10px">
                                          <Flex
                                              as={checkmark}
                                              h="10px !important"
                                              w="auto"
                                          />
                                      </Flex>
                                  ) : null}
                              </Flex>
                          ))
                        : null}
                </MenuGroup>
            </Stack>
            <Button
                m="10px"
                variantColor="blue"
                borderRadius="15px"
                h="36px"
                onClick={() => {
                    setTabIndex(0);
                    setDisplayTap('');
                    submitSelectedOption();
                    if (location.pathname !== '/search') {
                        history.push('/search?page=1');
                    }
                }}
            >
                Apply
            </Button>
        </Stack>
    );
}

TabPanelOptions.propTypes = {
    displayTap: PropTypes.string.isRequired,
    searchDetails: PropTypes.arrayOf(PropTypes.string).isRequired,
    filterPublisherInput: PropTypes.func.isRequired,
    selectedFilterOptions: PropTypes.objectOf(
        PropTypes.arrayOf(PropTypes.string),
    ).isRequired,
    filteredOptions: PropTypes.func.isRequired,
    publisherInputTerm: PropTypes.string.isRequired,
    setTabIndex: PropTypes.func.isRequired,
    setDisplayTap: PropTypes.func.isRequired,
    submitSelectedOption: PropTypes.func.isRequired,
    toggleObjects: PropTypes.func.isRequired,
};
