import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Routes from './routes';
import { NavigationBar } from './components/Navigation';
import { Dashboard, Account, Category, Logout, Login } from './pages';
import AuthRoute from './components/AuthRoute';
import { useLoginSelector } from './hooks/login';
import { UseUserDetails } from './hooks/user';

export default function Router() {
    const { accessToken } = useLoginSelector();
    const { picture } = UseUserDetails();

    return (
        <>
            <BrowserRouter>
                {accessToken ? <NavigationBar src={picture} /> : null}
                <Switch>
                    <AuthRoute exact path={Routes.Dashboard}>
                        <Dashboard />
                    </AuthRoute>
                    <AuthRoute exact path={Routes.Account}>
                        <Account />
                    </AuthRoute>
                    <AuthRoute path={Routes.Category}>
                        <Category />
                    </AuthRoute>
                    <AuthRoute path={Routes.Logout}>
                        <Logout />
                    </AuthRoute>
                    <Route path={Routes.Login}>
                        <Login />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}
