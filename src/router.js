import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { NavigationBar } from './components/Navigation';
import { Dashboard, Account, Category, Logout } from './pages';
import Login from './components/Login';

import Routes from './routes';

export default function Router() {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Switch>
                <Route exact path={Routes.Login}>
                    <Login />
                </Route>
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
    );
}
