import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import useLogOutDispatch from '../../hooks/logout';

function Logout() {
    const { resetAllState } = useLogOutDispatch();
    useEffect(() => {
        resetAllState();
        // eslint-disable-next-line
    }, []);

    return <Redirect to="/" />;
}
export default Logout;
