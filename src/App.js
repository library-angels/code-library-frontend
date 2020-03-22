import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Account from './components/Account';
import Category from './components/Category';
import Logout from './components/Logout';

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
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route exact path="/account">
                        <Account />
                    </Route>
                    <Route path="/category/:department">
                        <Category />
                    </Route>
                    <Route path="/logout">
                        <Logout />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
