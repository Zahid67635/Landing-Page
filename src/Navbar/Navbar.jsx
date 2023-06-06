import React from 'react';
import './Navbar.css'
const Navbar = () => {

    return (
        <div>
            <nav>
                <h2>Demo 2.0</h2>
                <ul className='mynav'>
                    <a href='#'><li>Home</li></a>
                    <a href='#'><li>Portfolio</li></a>
                    <a href='#'><li>Blog</li></a>
                    <a href='#'><li>Contact</li></a >
                </ul >
                <a href="#id1" className='btn'>Get Started</a>
            </nav >
        </div >
    );
};

export default Navbar;