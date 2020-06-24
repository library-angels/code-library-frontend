import { useDispatch } from 'react-redux';
import { LOGOUT_ACTION_CREATORS } from '../store/logout/logout.actions';

export default function useLogOutDispatch() {
    const dispatch = useDispatch();
    const resetAllState = () => dispatch(LOGOUT_ACTION_CREATORS.logOut());
    return {
        resetAllState,
    };
}
