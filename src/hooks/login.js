import { useSelector, useDispatch } from 'react-redux';
import { LOGIN_ACTION_CREATORS } from '../store/login/login.actions';
import LOGIN_SELECTORS from '../store/login/login.selector';

export function useLogintDispatch() {
    const dispatch = useDispatch();
    const signInUser = () =>
        dispatch(LOGIN_ACTION_CREATORS.loginExchangeTokens());
    return { signInUser };
}

export function useCheckSession() {
    const dispatch = useDispatch();
    const sessionVerifier = () =>
        dispatch(LOGIN_ACTION_CREATORS.checkSession());
    return { sessionVerifier };
}

export function useLoginSelector() {
    return {
        accessToken: useSelector(LOGIN_SELECTORS.getAccessToken),
    };
}
