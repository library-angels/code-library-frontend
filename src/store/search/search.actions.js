const SEARCH_INPUT_TYPING = 'SEARCH_INPUT_TYPING';
const SEARCH_FILTER_PUBLISHER_OPTION = 'SEARCH_FILTER_PUBLISHER_OPTION';
const SEARCH_FILTER_SELECTED_OPTIONS = 'SEARCH_FILTER_SELECTED_OPTIONS';
const SEARCH_CLONE_PUBLISHER = 'SEARCH_CLONE_PUBLISHER';
const SEARCH_SUBMIT_SELECTED_OPTIONS = 'SEARCH_SUBMIT_SELECTED_OPTIONS';
const SEARCH_SUBMIT_SELECTED_CLONE = 'SEARCH_SUBMIT_SELECTED_CLONE';
const SEARCH_REQUEST_FILTERED_BOOKS = 'SEARCH_REQUEST_FILTERED_BOOKS';
const SEARCH_RECEIVE_FILTERED_BOOKS = 'SEARCH_RECEIVE_FILTERED_BOOKS';
const SEARCH_FILTER_RESET = 'SEARCH_FILTER_RESET';

const searchInputTyping = input => ({
    type: SEARCH_INPUT_TYPING,
    payload: {
        input,
    },
});

const searchClonePublisher = Publishers => ({
    type: SEARCH_CLONE_PUBLISHER,
    payload: {
        Publishers,
    },
});

const searchFilterInput = (searchedPublisherInput, searchedTerm) => ({
    type: SEARCH_FILTER_PUBLISHER_OPTION,
    payload: {
        searchedPublisherInput,
        searchedTerm,
    },
});

const searchselectedoptions = (selectedOption, category) => ({
    type: SEARCH_FILTER_SELECTED_OPTIONS,
    payload: {
        selectedOption,
        category,
    },
});

const submitSelectedoptions = () => ({
    type: SEARCH_SUBMIT_SELECTED_OPTIONS,
});

const assignSelectedToSubmited = () => ({
    type: SEARCH_SUBMIT_SELECTED_CLONE,
});

const requestFilteredBooks = (offset = 0) => ({
    type: SEARCH_REQUEST_FILTERED_BOOKS,
    payload: {
        offset,
    },
});

const receiveFilteredBooks = (filteredList, offset, LastPageIndex, page) => ({
    type: SEARCH_RECEIVE_FILTERED_BOOKS,
    payload: {
        filteredList,
        offset,
        LastPageIndex,
        page,
    },
});
const resetFilterOptions = () => ({
    type: SEARCH_FILTER_RESET,
});

export const SEARCH_ACTIONS = {
    SEARCH_INPUT_TYPING,
    SEARCH_FILTER_PUBLISHER_OPTION,
    SEARCH_FILTER_SELECTED_OPTIONS,
    SEARCH_CLONE_PUBLISHER,
    SEARCH_SUBMIT_SELECTED_OPTIONS,
    SEARCH_SUBMIT_SELECTED_CLONE,
    SEARCH_REQUEST_FILTERED_BOOKS,
    SEARCH_RECEIVE_FILTERED_BOOKS,
    SEARCH_FILTER_RESET,
};

export const SEARCH_ACTION_CREATORS = {
    searchInputTyping,
    searchFilterInput,
    searchselectedoptions,
    searchClonePublisher,
    submitSelectedoptions,
    assignSelectedToSubmited,
    requestFilteredBooks,
    receiveFilteredBooks,
    resetFilterOptions,
};
