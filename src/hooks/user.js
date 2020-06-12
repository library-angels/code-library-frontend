import { useSelector, useDispatch } from 'react-redux';
import { USER_ACTION_CREATORS } from '../store/user/user.actions';
import USER_SELECTORS from '../store/user/user.selector';

export function UserDetailsDispatch() {
    const dispatch = useDispatch();
    const setUserDetails = user =>
        dispatch(USER_ACTION_CREATORS.userDetails(user));
    return {
        setUserDetails,
    };
}

export function UseUserDetails() {
    return {
        firstname: useSelector(USER_SELECTORS.getUserName),
        lastname: useSelector(USER_SELECTORS.getUserFamilyName),
        email: useSelector(USER_SELECTORS.getUserEmail),
        picture: useSelector(USER_SELECTORS.getUserProfilePic),
    };
}
