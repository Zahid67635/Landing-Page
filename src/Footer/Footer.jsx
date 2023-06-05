import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='content'>
                <div>
                    <h2>Demo 2.0</h2>
                    <a href="www.facebook.com"><img src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg" alt="" /></a>
                    <a href="www.instagram.com"><img src="https://img.freepik.com/premium-vector/purple-gradiend-social-media-logo_197792-1883.jpg?w=2000" alt="" /></a>
                    <a href="www.twitter.com"><img src="https://img.freepik.com/free-icon/twitter_318-674515.jpg" alt="" /></a>
                </div>
                <div>
                    <span>Navigation</span> <br /><br />
                    <a href="">About Us</a><br />
                    <a href="">Pricing</a><br />
                    <a href="">Blog</a><br />
                    <a href="">Contact Us</a>
                </div>
                <div>
                    <span>Support</span> <br /><br />
                    <a href="">Tools</a><br />
                    <a href="">E-Books</a><br />
                    <a href="">Management</a><br />
                    <a href="">Collaboration</a>
                </div>
                <div>
                    <span>Privacy</span> <br /><br />
                    <a href="">Help</a><br />
                    <a href="">Mail Us</a><br />
                    <a href="">Information</a><br />
                    <a href="">Company</a>
                </div>
                <div>
                    <span>Short Link</span> <br /><br />
                    <a href="">Contact Form</a><br />
                    <a href="">News Letter</a><br />
                    <a href="">Sign Up</a><br />

                </div>
            </div>
            <div className='copyright'>
                <span>@Copyright 2023</span>
                <span>Dhaka, Bangladesh</span>
            </div>
        </div>
    );
};

export default Footer;