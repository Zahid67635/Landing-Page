import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav>
                <h2>Demo</h2>
                <ul className='mynav'>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
                <button className='btn'>Get Started</button>
            </nav>
        </div>
    );
};

export default Navbar;