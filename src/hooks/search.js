import { useSelector, useDispatch } from 'react-redux';
import { getSearchBooksPublishers } from '../store/books/books.selectors';
import { SEARCH_ACTION_CREATORS } from '../store/search/search.actions';
import SEARCH_SELECTORS from '../store/search/search.selectors';

export function useSearchDispatch() {
    const dispatch = useDispatch();

    const setInput = input =>
        dispatch(SEARCH_ACTION_CREATORS.searchInputTyping(input));

    return {
        setInput,
    };
}

export function useSearchPubFilterDispatch() {
    let counter = {};
    const dispatch = useDispatch();
    const Publishers = useSelector(getSearchBooksPublishers);
    const updatePublisherFilter = searchedTerm => {
        Object.entries(Publishers).map(([id, value]) => {
            if (value.toLowerCase().includes(searchedTerm)) {
                counter = { ...{ [id]: value }, ...counter };
            }
            return null;
        });

        return dispatch(
            SEARCH_ACTION_CREATORS.searchFilterInput(counter, searchedTerm),
        );
    };
    return { updatePublisherFilter };
}

export function useSearchSelectedOptionDispatch() {
    const dispatch = useDispatch();
    const selectedOptions = (value, option) =>
        dispatch(SEARCH_ACTION_CREATORS.searchselectedoptions(value, option));
    const submitSelectedOption = () =>
        dispatch(SEARCH_ACTION_CREATORS.submitSelectedoptions());
    const toggleObjects = () =>
        dispatch(SEARCH_ACTION_CREATORS.assignSelectedToSubmited());
    return { selectedOptions, submitSelectedOption, toggleObjects };
}

export function useFilterDispatch() {
    const dispatch = useDispatch();
    const requestFilteredList = () => {
        dispatch(SEARCH_ACTION_CREATORS.requestFilteredBooks());
    };
    return { requestFilteredList };
}

export function useResetFilterDispatch() {
    const dispatch = useDispatch();
    const resetAllFilterOptions = () => {
        dispatch(SEARCH_ACTION_CREATORS.resetFilterOptions());
    };
    return { resetAllFilterOptions };
}

export function useSearchSelector(showAllTags = null) {
    return {
        allFields: useSelector(SEARCH_SELECTORS.getFields),
        currentInput: useSelector(SEARCH_SELECTORS.getInput),
        searchDetails: useSelector(SEARCH_SELECTORS.getSearchFilter),
        selectedFilterOptions: useSelector(SEARCH_SELECTORS.getselectedOptions),
        publisherInputTerm: useSelector(
            SEARCH_SELECTORS.getPublisherSearchedTerm,
        ),
        submitedFilterOption: useSelector(SEARCH_SELECTORS.getSubmitSelected),
        filteredBooks: useSelector(SEARCH_SELECTORS.getFilteredBooks),
        LastPageIndex: useSelector(SEARCH_SELECTORS.getSearchLastIndex),
        showTags: useSelector(SEARCH_SELECTORS.getShowTags),
        tagsItems: useSelector(SEARCH_SELECTORS.getTagItems(showAllTags)),
    };
}
