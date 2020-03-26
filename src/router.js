import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import { Dashboard, Account, Category, Logout } from './pages';

import Routes from './routes';

export default function Router() {
    return (
        <BrowserRouter>
            <Navigation includeSearch />
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
    );
}
