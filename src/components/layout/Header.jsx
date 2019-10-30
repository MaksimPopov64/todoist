import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

export const Header = () => {
    return <header className="header" data-testId="header">
        <nav>
            <div classname="logo">
                <img src="images/logo.png" alt="kaif" />
            </div>
            <div className="settings">
                <ul>
                    <li>+</li>
                    <li><FaPizzaSlice /></li>
                </ul>
            </div>
        </nav>
    </header>
}
