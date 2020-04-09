import { useSelector, useDispatch } from 'react-redux';

import { SEARCH_ACTION_CREATORS } from '../store/search/search.actions';
import {
    getFields,
    getField,
    getInput,
} from '../store/search/search.selectors';

const { searchInputTyping, searchSelectField } = SEARCH_ACTION_CREATORS;

export default function useSearch() {
    const dispatch = useDispatch();

    return {
        set: {
            setInput: input => dispatch(searchInputTyping(input)),
            setField: field => dispatch(searchSelectField(field)),
        },
        get: {
            fields: useSelector(getFields),
            field: useSelector(getField),
            input: useSelector(getInput),
        },
    };
}
