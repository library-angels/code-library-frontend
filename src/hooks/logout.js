import { useDispatch } from 'react-redux';
import { LOGOUT_ACTION_CREATORS } from '../store/logout/logout.actions';

function useLogOutDispatch() {
    const dispatch = useDispatch();

    const resetAllState = () => dispatch(LOGOUT_ACTION_CREATORS.logOut());

    return {
        resetAllState,
    };
}
export default useLogOutDispatch;
