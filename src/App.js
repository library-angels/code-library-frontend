import React, { useEffect } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Routes from './router';

import Navigation from './components/Navigation';
import { Dashboard, Account, Category, Logout } from './pages';

import useBooks from './hooks/books';

function App() {
    const { load } = useBooks();

    useEffect(() => {
        load();
    }, []);

    return (
        <ThemeProvider>
            <CSSReset />
            <div className="app">
                <Router>
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
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
