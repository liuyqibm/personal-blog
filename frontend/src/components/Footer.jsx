import React from 'react';
import "../styles/Footer.css"; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} My Personal Blog. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;