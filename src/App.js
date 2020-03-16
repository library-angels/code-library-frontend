import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Account from './components/Account';
import Category from './components/Category';
import Logout from './components/Logout';
import { ThemeProvider } from '@chakra-ui/core';

function App() {
    return (
        <div className="app">
            <ThemeProvider>
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
            </ThemeProvider>
        </div>
    );
}

export default App;
