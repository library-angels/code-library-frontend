import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Account from './components/Account';
import Category from './components/Category';
import Logout from './components/Logout';

function App() {
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
