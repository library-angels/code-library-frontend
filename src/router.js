import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { NavigationBar } from './components/Navigation';
import { Dashboard, Account, Category, Logout } from './pages';
import Login from './components/Login';
import { useLoginSelector } from '../src/hooks/login';

import Routes from './routes';

export default function Router() {
    const { accessToken } = useLoginSelector();
    return (
        <>
            {accessToken ? (
                <BrowserRouter>
                    <NavigationBar />
                    <Switch>
                        <Route exact path={Routes.Dashboard}>
                            <Dashboard />
                        </Route>
                        <Route exact path={Routes.Account}>
                            <Account />
                        </Route>
                        <Route path={Routes.Category}>
                            <Category />
                        </Route>
                        <Route path={Routes.Logout}>
                            <Logout />
                        </Route>
                    </Switch>
                </BrowserRouter>
            ) : (
                <Login />
            )}
        </>
    );
}
