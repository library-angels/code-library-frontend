import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../static/code.png';
import './styles.scss';

function Navigation() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <ul>
                    <li id="library-link">
                        <Link to="/">Library</Link>
                    </li>
                    <li id="account-link">
                        <Link to="/account">My Account</Link>
                    </li>
                    <li id="logout-link">
                        <Link to="/logout">Log out</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;
