import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Routes from './routes';
import { NavigationBar } from './components/Navigation';
import { Dashboard, Account, Category, Logout, Login } from './pages';
import AuthRoute from './components/AuthRoute';
import { useLoginSelector } from './hooks/login';

export default function Router() {
    const { accessToken } = useLoginSelector();

    return (
        <>
            <BrowserRouter>
                {accessToken ? <NavigationBar /> : null}
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
