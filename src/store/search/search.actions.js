const SEARCH_INPUT_TYPING = 'SEARCH_INPUT_TYPING';
const SEARCH_FILTER_PUBLISHER_OPTION = 'SEARCH_FILTER_PUBLISHER_OPTION';
const SEARCH_FILTER_SELECTED_OPTIONS = 'SEARCH_FILTER_SELECTED_OPTIONS';
const SEARCH_CLONE_PUBLISHER = 'SEARCH_CLONE_PUBLISHER';
const SEARCH_SUBMIT_SELECTED_OPTIONS = 'SEARCH_SUBMIT_SELECTED_OPTIONS';
const SEARCH_SUBMIT_SELECTED_CLONE = 'SEARCH_SUBMIT_SELECTED_CLONE';

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

export const SEARCH_ACTIONS = {
    SEARCH_INPUT_TYPING,
    SEARCH_FILTER_PUBLISHER_OPTION,
    SEARCH_FILTER_SELECTED_OPTIONS,
    SEARCH_CLONE_PUBLISHER,
    SEARCH_SUBMIT_SELECTED_OPTIONS,
    SEARCH_SUBMIT_SELECTED_CLONE,
};

export const SEARCH_ACTION_CREATORS = {
    searchInputTyping,
    searchFilterInput,
    searchselectedoptions,
    searchClonePublisher,
    submitSelectedoptions,
    assignSelectedToSubmited,
};
