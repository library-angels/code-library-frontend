import { useSelector, useDispatch } from 'react-redux';
import { ACCOUNT_ACTION_CREATORS } from '../store/account/account.actions';
import { getShowID, getShowModal } from '../store/account/account.selectors';

const { accountToggleModal, accountViewBookDetails } = ACCOUNT_ACTION_CREATORS;

export function useSetShowID() {
    const dispatch = useDispatch();

    return {
        setShowID: showID => dispatch(accountViewBookDetails(showID)),
        getShowID: useSelector(getShowID),
    };
}

export function useToggleModal() {
    const dispatch = useDispatch();

    return {
        setModal: () => dispatch(accountToggleModal()),
        getModal: useSelector(getShowModal),
    };
}
