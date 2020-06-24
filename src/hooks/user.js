import { useSelector } from 'react-redux';

import USER_SELECTORS from '../store/user/user.selector';

export function UseUserDetails() {
    return {
        firstname: useSelector(USER_SELECTORS.getUserName),
        lastname: useSelector(USER_SELECTORS.getUserFamilyName),
        email: useSelector(USER_SELECTORS.getUserEmail),
        picture: useSelector(USER_SELECTORS.getUserProfilePic),
    };
}
