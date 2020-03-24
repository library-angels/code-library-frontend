import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './router';

import Navigation from './components/Navigation';
import { Dashboard, Account, Category, Logout } from './pages';

import useBooks from './hooks/books';

function App() {
    const { load } = useBooks();

    useEffect(() => {
        load();
    }, []);

    return (
        <div className="app">
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path={routes.Dashboard}>
                        <Dashboard />
                    </Route>
                    <Route exact path={routes.Account}>
                        <Account />
                    </Route>
                    <Route path={routes.Category}>
                        <Category />
                    </Route>
                    <Route path={routes.Logout}>
                        <Logout />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
