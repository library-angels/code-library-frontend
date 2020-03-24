import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../static/code.png';
import './styles.scss';

function Navigation() {
    return (
        <header>
            <div id="logo-box">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <span>Library</span>
            </div>
            <nav>
                <ul>
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
