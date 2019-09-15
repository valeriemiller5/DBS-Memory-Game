import React from 'react';
import './Header.css';

const Header = props => (

    <div className="navbar navbar-expand-lg navbar-light">
        <ul className="nav nav-tabs">
            <li className="nav-item title">
                <h1>DBS Memory Game</h1>
            </li>
            <li className="nav-item center">
                <div id="message">Click any image to begin the game!</div>
            </li>
        </ul>
    </div>
);

export default Header;
