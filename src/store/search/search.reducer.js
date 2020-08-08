import { SEARCH_ACTIONS } from './search.actions';

const {
    SEARCH_INPUT_TYPING,
    SEARCH_FILTER_PUBLISHER_OPTION,
    SEARCH_FILTER_SELECTED_OPTIONS,
    SEARCH_CLONE_PUBLISHER,
    SEARCH_SUBMIT_SELECTED_OPTIONS,
    SEARCH_SUBMIT_SELECTED_CLONE,
} = SEARCH_ACTIONS;

const initialState = {
    sortby: {
        1: 'Newest-Oldest',
        2: 'Alphabetical',
        3: 'Available-Missing',
    },
    fields: { 1: 'All', 2: 'Title', 3: 'Author' },
    input: null,
    PublisherSearchedTerm: '',
    filteredPublishers: null,
    selectedOptions: {
        'Search by': [],
        Category: [],
        Series: [],
        Publishers: [],
        'Sort by': [],
    },
    submitSelected: {
        'Search by': ['All'],
        Category: ['All'],
        Series: ['All'],
        Publishers: ['All'],
        'Sort by': ['Alphabetical'],
    },
};

function search(state = initialState, action) {
    switch (action.type) {
        case SEARCH_INPUT_TYPING: {
            return {
                ...state,
                input: action.payload.input,
            };
        }

        case SEARCH_CLONE_PUBLISHER: {
            return {
                ...state,
                filteredPublishers: {
                    ...action.payload.Publishers,
                },
            };
        }

        case SEARCH_FILTER_PUBLISHER_OPTION: {
            return {
                ...state,
                PublisherSearchedTerm: action.payload.searchedTerm,
                filteredPublishers: {
                    ...action.payload.searchedPublisherInput,
                },
            };
        }

        case SEARCH_FILTER_SELECTED_OPTIONS: {
            const { selectedOptions } = state;
            const prevTerm = selectedOptions[action.payload.category];
            const newSearchedTerm = action.payload.selectedOption;

            if (
                prevTerm.length === 0 ||
                prevTerm.filter(item => item === newSearchedTerm).length === 0
            ) {
                if (
                    action.payload.category === 'Search by' ||
                    action.payload.category === 'Sort by' ||
                    newSearchedTerm === 'All'
                ) {
                    selectedOptions[action.payload.category] = [
                        newSearchedTerm,
                    ];
                } else {
                    selectedOptions[action.payload.category] = [
                        ...prevTerm.filter(
                            item => item !== newSearchedTerm && item !== 'All',
                        ),
                        newSearchedTerm,
                    ];
                }
            } else {
                const new_data = prevTerm.filter(
                    item => item !== newSearchedTerm && item !== 'All',
                );
                selectedOptions[action.payload.category] = new_data;
            }
            if (selectedOptions[action.payload.category].length === 0) {
                if (action.payload.category !== 'Sort by') {
                    selectedOptions[action.payload.category] = ['All'];
                } else {
                    selectedOptions[action.payload.category] = ['Alphabetical'];
                }
            }
            return {
                ...state,
                selectedOptions: { ...selectedOptions },
            };
        }

        case SEARCH_SUBMIT_SELECTED_OPTIONS: {
            return {
                ...state,
                submitSelected: { ...state.selectedOptions },
            };
        }

        case SEARCH_SUBMIT_SELECTED_CLONE: {
            return {
                ...state,
                selectedOptions: { ...state.submitSelected },
            };
        }

        default:
            return state;
    }
}

export default search;
