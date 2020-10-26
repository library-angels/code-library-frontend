import { useSelector, useDispatch } from 'react-redux';
import { ERROR_ACTION_CREATORS } from '../store/errors/errors.actions';
import ERROR_SELECTORS from '../store/errors/error.selectors';

export function useErrorDispatch() {
    const dispatch = useDispatch();
    const resetErrorMessage = () =>
        dispatch(ERROR_ACTION_CREATORS.resetErrorType());
    return { resetErrorMessage };
}

export function useErrorSelector() {
    return {
        errorMessage: useSelector(ERROR_SELECTORS.getErrorMessage),
    };
}
