import React from 'react';
import './Section4.css'
const Section4 = () => {
    return (
        <div className='sec-4'>
            <div className='main-content'>
                <div>
                    <h2>We believed in making Your dreams true</h2>
                    <div className='sol-content'>
                        <div>
                            <div className='icons'><img src="announcement.svg" alt="" /></div>
                            <h5>Targeted Solution</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                        <div>
                            <div className='icons'><img src="target.svg" alt="" /></div>
                            <h5>Marketing Solution</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='image-width'>
                <img src="yeah.jpg" alt="" />
            </div>
        </div>
    );
};

export default Section4;