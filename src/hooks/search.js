import { useSelector, useDispatch } from 'react-redux';

import { SEARCH_ACTION_CREATORS } from '../store/search/search.actions';
import SEARCH_SELECTORS from '../store/search/search.selectors';

export function useSearchDispatch() {
    const dispatch = useDispatch();

    const setInput = input =>
        dispatch(SEARCH_ACTION_CREATORS.searchInputTyping(input));
    const setSelected = field =>
        dispatch(SEARCH_ACTION_CREATORS.searchSelectField(field));

    return {
        setInput,
        setSelected,
    };
}

export function useSearchSelector() {
    return {
        currentField: useSelector(SEARCH_SELECTORS.getField),
        allFields: useSelector(SEARCH_SELECTORS.getFields),
        currentInput: useSelector(SEARCH_SELECTORS.getInput),
    };
}
