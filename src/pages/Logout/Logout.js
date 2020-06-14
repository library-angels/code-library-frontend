import React, { useEffect } from 'react';
import { useLogOutDispatch } from '../../hooks/logout';

function Logout() {
    const { resetAllState } = useLogOutDispatch();
    useEffect(() => {
        resetAllState();
    }, []);

    return <div>Log out</div>;
}

export default Logout;
