import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import routes from '../../routes';
import { useLoginSelector } from '../../hooks/login';

function AuthRoute({ children, path }) {
    const { accessToken } = useLoginSelector();
    return (
        <Route
            path={path}
            render={() =>
                accessToken ? children : <Redirect to={routes.Login} />
            }
        />
    );
}

AuthRoute.propTypes = {
    children: PropTypes.objectOf(PropTypes.any).isRequired,
    path: PropTypes.string.isRequired,
};

export default AuthRoute;
