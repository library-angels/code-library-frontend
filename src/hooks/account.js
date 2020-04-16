import { useSelector, useDispatch } from 'react-redux';
import { ACCOUNT_ACTION_CREATORS } from '../store/account/account.actions';
import ACCOUNT_SELECTORS from '../store/account/account.selectors';

export function useAccountDispatch() {
    const dispatch = useDispatch();

    const setShowID = showID =>
        dispatch(ACCOUNT_ACTION_CREATORS.accountViewBookDetails(showID));

    const toggleShowModal = () =>
        dispatch(ACCOUNT_ACTION_CREATORS.accountToggleModal());

    return {
        setShowID,
        toggleShowModal,
    };
}

export function useAccountSelector() {
    return {
        showID: useSelector(ACCOUNT_SELECTORS.getShowID),
        showModal: useSelector(ACCOUNT_SELECTORS.getShowModal),
    };
}
