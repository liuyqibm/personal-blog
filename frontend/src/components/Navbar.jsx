import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"; // Assuming you will create a CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">My Blog</Link>
            </div>
            <button 
                onClick={() => {/* ...existing code... */}}
                aria-label="导航菜单"
                title="导航菜单"
            >
                菜单
            </button>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;